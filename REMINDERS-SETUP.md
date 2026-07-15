# Compound V — Reminders setup (push notifications)

Three daily check-in pushes: **morning 07:15**, **afternoon 16:30**, **evening
20:00** (Israel time). Each only fires if there's something worth saying, and
each can be toggled on/off by the kid in Settings. The app + service worker parts
are already built; these are the dashboard/CLI steps only you can do.

Prerequisite: you've already done `SUPABASE-SETUP.md` (project, schema, sign-in).
Re-run `supabase/schema.sql` once more — it now also creates the
`push_subscriptions` table (safe to re-run).

Estimated time: ~20 minutes.

---

## 1. Generate VAPID keys (one time)
These identify your server to the browsers' push services. On your computer:
```
npx web-push generate-vapid-keys
```
It prints a **Public Key** and a **Private Key**. Keep both handy.
- Public key → goes in the app (`config.js`), safe to ship.
- Private key → a Supabase secret, NEVER in the app or repo.

## 2. Put the public key in the app
Open `config.js` and fill in:
```js
vapidPublicKey: "BM...your public key...",
```
Redeploy the app (push to GitHub). The "הפעלת תזכורות" button in Settings only
appears once this is set and the kid is signed in.

## 3. Deploy the send-reminders function
Install the Supabase CLI if you haven't (https://supabase.com/docs/guides/cli),
then from the app folder:
```
supabase login
supabase link --project-ref ojsofceaeelyqzafarjh
supabase functions deploy send-reminders
```

## 4. Give the function its secrets
```
supabase secrets set VAPID_PUBLIC_KEY="BM...public..."
supabase secrets set VAPID_PRIVATE_KEY="...private..."
supabase secrets set VAPID_SUBJECT="mailto:YOUR_EMAIL]"
```
(SUPABASE_URL and the service-role key are provided to the function automatically.)

## 5. Schedule it (one cron, daylight-saving-proof)
The function decides which slot is due by checking the **local time in Israel**
itself, so you schedule ONE job that runs every 15 minutes and never needs
touching again — DST is handled automatically.

In Supabase → **SQL Editor**, run once:
```sql
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- runs every 15 minutes; the function fires a slot only when it's 07:15 / 16:30
-- / 20:00 in the user's timezone, and only if there's something to report.
-- Replace ANON_KEY with your anon public key.
select cron.schedule('cv-reminders', '*/15 * * * *', $$
  select net.http_post(
    url:='https://ojsofceaeelyqzafarjh.supabase.co/functions/v1/send-reminders',
    headers:='{"Content-Type":"application/json","Authorization":"Bearer ANON_KEY"}'::jsonb,
    body:='{}'::jsonb
  );
$$);
```

That's it — no summer/winter changes, ever. The three fixed local times
(07:15 / 16:30 / 20:00) live in the function; if you ever want to change them,
edit `SLOT_TIMES` at the top of the function and redeploy.

## 6. Test it
- In the app (signed in, on his phone), Settings → **הפעלת תזכורות**, grant the
  permission prompt. The three slots appear, all on.
- Force a test push immediately (no waiting for a slot time) — in SQL Editor,
  the `{"test":"morning"}` body bypasses the clock and fires the morning message:
  ```sql
  select net.http_post(
    url:='https://ojsofceaeelyqzafarjh.supabase.co/functions/v1/send-reminders',
    headers:='{"Content-Type":"application/json","Authorization":"Bearer ANON_KEY"}'::jsonb,
    body:='{"test":"morning"}'::jsonb
  );
  ```
  Use `"afternoon"` or `"evening"` to test those messages. If he has a task due
  today / tomorrow / overdue (as the slot requires), a push arrives on his phone.
  Remove nothing afterward — the test body just skips the time check; normal cron
  runs send an empty body and behave normally.

## Notes / gotchas
- **iOS:** push only works when the app is **installed to the home screen**
  (he's done that) on iOS 16.4+. In a normal Safari tab it won't push.
- **Nothing to report = no push.** If there's nothing due/overdue for a slot, that
  slot stays silent by design, so quiet days won't nag.
- **Dead devices self-clean:** if a subscription expires, the function removes it
  automatically on the next run.
- **The service-role key** is used only inside the function (server-side) and is
  set via `supabase secrets`, never in the app or repo.
