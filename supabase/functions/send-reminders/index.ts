// Supabase Edge Function: send-reminders
// Called by Supabase Cron ONCE PER HOUR (at minute 15 and minute 30 — see
// REMINDERS-SETUP.md). No slot is passed; the function figures out, per user and
// in the user's own timezone, whether any of the three fixed daily slots is due
// right now. This makes it daylight-saving-proof — you never touch the schedule.
//
// Fixed local times: morning 07:15, afternoon 16:30, evening 20:00.
//
// Secrets required (Supabase → Edge Functions → Manage secrets):
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT (e.g. mailto:you@example.com)
//   SUPABASE_URL and SERVICE_ROLE_KEY are provided automatically.

import { createClient } from 'jsr:@supabase/supabase-js@2';
import webpush from 'npm:web-push@3.6.7';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE = Deno.env.get('SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const VAPID_PUBLIC = Deno.env.get('VAPID_PUBLIC_KEY')!;
const VAPID_PRIVATE = Deno.env.get('VAPID_PRIVATE_KEY')!;
const VAPID_SUBJECT = Deno.env.get('VAPID_SUBJECT') ?? 'mailto:admin@example.com';

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);
const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

// fixed local times for each slot
const SLOT_TIMES: Record<string, {h:number, m:number}> = {
  morning:   { h: 7,  m: 15 },
  afternoon: { h: 16, m: 30 },
  evening:   { h: 20, m: 0  },
};
const typeLabel: Record<string,string> = { homework:'שיעורי בית', big:'עבודה', quiz:'בוחן', test:'מבחן' };

// current local hour+minute in a timezone
function localHM(tz: string): {h:number, m:number} {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour:'2-digit', minute:'2-digit', hour12:false }).formatToParts(new Date());
  const h = parseInt(parts.find(p=>p.type==='hour')!.value, 10) % 24;
  const m = parseInt(parts.find(p=>p.type==='minute')!.value, 10);
  return { h, m };
}
// which slot (if any) is "due now" in this tz.
// The cron fires every 15 minutes (:00,:15,:30,:45). A slot matches when the
// current local time is at or just after its target, within a 15-min window —
// so each slot fires exactly once per day, at its intended time.
function slotDueNow(tz: string): string | null {
  const { h, m } = localHM(tz);
  for (const [slot, t] of Object.entries(SLOT_TIMES)) {
    if (h === t.h && m >= t.m && m < t.m + 15) return slot;
  }
  return null;
}

function daysUntil(finishISO: string, tz: string): number {
  const now = new Date();
  const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year:'numeric', month:'2-digit', day:'2-digit' }).format(now);
  const today = new Date(todayStr + 'T00:00:00Z').getTime();
  const finish = new Date(finishISO.slice(0,10) + 'T00:00:00Z').getTime();
  return Math.round((finish - today) / 86400000);
}

function buildMessage(slot: string, tasks: any[], tz: string): { title:string, body:string } | null {
  const open = tasks.filter(t => !t.done).map(t => ({ ...t, d: daysUntil(t.finish, tz) }));
  const overdue  = open.filter(t => t.d < 0);
  const today    = open.filter(t => t.d === 0);
  const tomorrow = open.filter(t => t.d === 1);
  const list = (arr:any[]) => arr.slice(0,3).map(t => `${t.subject} (${typeLabel[t.type] || t.type})`).join(', ');

  if (slot === 'morning') {
    if (today.length === 0 && overdue.length === 0) return null;
    const parts:string[] = [];
    if (today.length) parts.push(`להיום: ${list(today)}`);
    if (overdue.length) parts.push(`באיחור: ${overdue.length}`);
    return { title: 'בוקר טוב ☀️', body: parts.join(' · ') };
  }
  if (slot === 'afternoon') {
    const soon = open.filter(t => t.d >= 0 && t.d <= 2);
    if (soon.length === 0 && overdue.length === 0) return null;
    const parts:string[] = ['מה קיבלת היום? אל תשכח לרשום'];
    if (today.length) parts.push(`להיום: ${list(today)}`);
    else if (overdue.length) parts.push(`באיחור: ${overdue.length}`);
    return { title: 'בדיקת צהריים', body: parts.join(' · ') };
  }
  if (slot === 'evening') {
    if (tomorrow.length === 0 && overdue.length === 0) return null;
    const parts:string[] = [];
    if (tomorrow.length) parts.push(`למחר: ${list(tomorrow)}`);
    if (overdue.length) parts.push(`עדיין פתוח באיחור: ${overdue.length}`);
    return { title: 'לקראת מחר', body: parts.join(' · ') };
  }
  return null;
}

Deno.serve(async (req) => {
  // Optional test override: POST {"test":"morning"} to force that slot for the
  // signed-in test regardless of the clock. Normal cron sends an empty body.
  let testSlot = '';
  try { testSlot = (await req.json())?.test ?? ''; } catch { /* empty body = normal run */ }

  // pull all enabled subscriptions; decide per-device whether a slot is due now
  const { data: subs, error } = await admin.from('push_subscriptions').select('*').eq('enabled', true);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  // cache each user's tasks so we fetch once per user
  const tasksCache: Record<string, any[]> = {};
  async function tasksFor(userId: string): Promise<any[]> {
    if (userId in tasksCache) return tasksCache[userId];
    const { data: st } = await admin.from('app_state').select('value').eq('user_id', userId).eq('key','tasks').maybeSingle();
    return (tasksCache[userId] = (st?.value ?? []) as any[]);
  }

  let sent = 0, skipped = 0, pruned = 0;
  for (const s of subs ?? []) {
    const tz = s.reminder_tz || 'Asia/Jerusalem';
    const slot = testSlot && ['morning','afternoon','evening'].includes(testSlot) ? testSlot : slotDueNow(tz);
    if (!slot) { skipped++; continue; }                 // not this device's time
    if (s[`${slot}_enabled`] === false) { skipped++; continue; } // that slot is off for them

    const tasks = await tasksFor(s.user_id);
    const msg = buildMessage(slot, tasks, tz);
    if (!msg) { skipped++; continue; }                  // nothing worth saying
    const payload = JSON.stringify({ title: msg.title, body: msg.body, url: './', tag: `cv-${slot}` });

    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload);
      sent++;
    } catch (e) {
      const code = (e as any)?.statusCode;
      if (code === 404 || code === 410) {
        await admin.from('push_subscriptions').delete().eq('user_id', s.user_id).eq('endpoint', s.endpoint);
        pruned++;
      } else { skipped++; }
    }
  }
  return new Response(JSON.stringify({ ok:true, sent, skipped, pruned }), { headers: { 'Content-Type':'application/json' } });
});
