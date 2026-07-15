-- ============================================================
--  Compound V — Supabase schema
--  Paste this whole file into: Supabase Dashboard → SQL Editor → New query → Run
--  Safe to re-run (uses "if not exists" / "or replace").
-- ============================================================

-- Each row belongs to a user (auth.uid()). One row per user per data type,
-- holding the whole blob as JSON — this mirrors the app's Store layer exactly
-- (tasks, subjects, sources, settings), so sync is a simple read/write of each.
-- The action log is the exception: it's append-only rows, so it can be queried
-- and aggregated server-side for the daily digest.

-- ---------- app state (one JSON blob per user per key) ----------
create table if not exists public.app_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  key     text not null,            -- 'tasks' | 'subjects' | 'sources' | 'settings'
  value   jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.app_state enable row level security;

drop policy if exists "own state select" on public.app_state;
create policy "own state select" on public.app_state
  for select using (auth.uid() = user_id);

drop policy if exists "own state upsert" on public.app_state;
create policy "own state upsert" on public.app_state
  for insert with check (auth.uid() = user_id);

drop policy if exists "own state update" on public.app_state;
create policy "own state update" on public.app_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------- action log (append-only audit trail) ----------
create table if not exists public.action_log (
  id       text primary key,        -- client-generated id (keeps offline entries stable)
  user_id  uuid not null references auth.users(id) on delete cascade,
  ts       timestamptz not null,
  event    text not null,           -- add | done | edit_given | delete | notes_add | ...
  task_id  text,
  data     jsonb not null default '{}'::jsonb
);

create index if not exists action_log_user_ts on public.action_log (user_id, ts);

alter table public.action_log enable row level security;

drop policy if exists "own log select" on public.action_log;
create policy "own log select" on public.action_log
  for select using (auth.uid() = user_id);

drop policy if exists "own log insert" on public.action_log;
create policy "own log insert" on public.action_log
  for insert with check (auth.uid() = user_id);
-- no update/delete policy: the log is append-only by design.

-- ---------- push subscriptions (for reminders) ----------
create table if not exists public.push_subscriptions (
  user_id  uuid not null references auth.users(id) on delete cascade,
  endpoint text not null,              -- browser push endpoint (unique per device)
  p256dh   text not null,              -- subscription public key
  auth     text not null,              -- subscription auth secret
  reminder_tz text not null default 'Asia/Jerusalem',
  -- three daily check-in slots; each can be toggled independently
  morning_enabled   boolean not null default true,   -- ~07:15
  afternoon_enabled boolean not null default true,   -- ~16:30
  evening_enabled   boolean not null default true,   -- ~20:00
  enabled boolean not null default true,             -- master on/off
  updated_at timestamptz not null default now(),
  primary key (user_id, endpoint)
);

create index if not exists push_sub_user on public.push_subscriptions (user_id);

alter table public.push_subscriptions enable row level security;

drop policy if exists "own push select" on public.push_subscriptions;
create policy "own push select" on public.push_subscriptions
  for select using (auth.uid() = user_id);

drop policy if exists "own push upsert" on public.push_subscriptions;
create policy "own push upsert" on public.push_subscriptions
  for insert with check (auth.uid() = user_id);

drop policy if exists "own push update" on public.push_subscriptions;
create policy "own push update" on public.push_subscriptions
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own push delete" on public.push_subscriptions;
create policy "own push delete" on public.push_subscriptions
  for delete using (auth.uid() = user_id);

-- ---------- task images (Supabase Storage) ----------
-- Private bucket; each user can only touch files under their own user-id folder.
-- Path convention: <user_id>/<task_id>/<image_id>.jpg
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('task-images', 'task-images', false, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "own images select" on storage.objects;
create policy "own images select" on storage.objects
  for select using (
    bucket_id = 'task-images' and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "own images insert" on storage.objects;
create policy "own images insert" on storage.objects
  for insert with check (
    bucket_id = 'task-images' and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "own images delete" on storage.objects;
create policy "own images delete" on storage.objects
  for delete using (
    bucket_id = 'task-images' and (storage.foldername(name))[1] = auth.uid()::text
  );

-- ============================================================
--  Done. The app's storage-supabase.js reads/writes these tables.
--  The daily-digest job (built later) will read action_log server-side.
-- ============================================================

-- ============================================================
--  Push subscriptions (for reminders) — added later
--  Re-run this block in SQL Editor if you set up reminders.
-- ============================================================
create table if not exists public.push_subscriptions (
  user_id    uuid not null references auth.users(id) on delete cascade,
  endpoint   text not null,
  p256dh     text not null,
  auth       text not null,
  reminder_hour   int not null default 16,   -- local hour for the daily check-in
  reminder_tz     text not null default 'Asia/Jerusalem',
  enabled    boolean not null default true,
  updated_at timestamptz not null default now(),
  primary key (user_id, endpoint)
);

alter table public.push_subscriptions enable row level security;

drop policy if exists "own subs select" on public.push_subscriptions;
create policy "own subs select" on public.push_subscriptions
  for select using (auth.uid() = user_id);

drop policy if exists "own subs upsert" on public.push_subscriptions;
create policy "own subs upsert" on public.push_subscriptions
  for insert with check (auth.uid() = user_id);

drop policy if exists "own subs update" on public.push_subscriptions;
create policy "own subs update" on public.push_subscriptions
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own subs delete" on public.push_subscriptions;
create policy "own subs delete" on public.push_subscriptions
  for delete using (auth.uid() = user_id);
