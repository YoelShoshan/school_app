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

-- ============================================================
--  Done. The app's storage-supabase.js reads/writes these tables.
--  The daily-digest job (built later) will read action_log server-side.
-- ============================================================
