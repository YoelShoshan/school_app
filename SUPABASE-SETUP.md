# Compound V — Supabase setup (the parts only you can do)

The app now supports cloud sync, but it ships **inactive** — it runs local-only
until you connect a Supabase project. Nothing breaks in the meantime. When you're
ready, these are the steps I can't do for you (they need your account and keys).

Estimated time: ~15 minutes.

---

## 1. Create a Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**. Give it a name (e.g. "compound-v"), set a database
   password (save it somewhere), pick a region near you (e.g. Europe).
3. Wait ~2 minutes for it to provision.

## 2. Create the database tables
1. In the project, open **SQL Editor** (left sidebar) → **New query**.
2. Open the file `supabase/schema.sql` from the app folder, copy its entire
   contents, paste into the editor, and click **Run**.
3. You should see "Success". This creates the tables and the security rules that
   make each user only able to see their own data.

## 3. Turn on Google sign-in
1. Left sidebar → **Authentication** → **Providers** (or **Sign In / Providers**).
2. Find **Google**, toggle it on.
3. It will ask for a Google **Client ID** and **Client Secret**. To get them:
   - Go to https://console.cloud.google.com → create a project (or reuse one).
   - **APIs & Services → Credentials → Create credentials → OAuth client ID**.
   - Application type: **Web application**.
   - Under **Authorized redirect URIs**, paste the callback URL that the Supabase
     Google page shows you (it looks like
     `https://YOUR-PROJECT.supabase.co/auth/v1/callback`).
   - Create, then copy the **Client ID** and **Client Secret** back into the
     Supabase Google provider fields. Save.
   *(If this OAuth step feels heavy, tell me and I'll switch the app to
   email-link sign-in instead — no Google Cloud console needed.)*

## 4. Allow your app's web address
1. Left sidebar → **Authentication** → **URL Configuration**.
2. Set **Site URL** to wherever the app is hosted (your Netlify/Vercel URL, or
   `http://localhost:8080` for local testing).
3. Add the same URL under **Redirect URLs**. Save.

## 5. Paste your two keys into the app
1. Left sidebar → **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `config.js` in the app folder and fill them in:
   ```js
   window.SUPABASE_CONFIG = {
     url:     "https://YOUR-PROJECT.supabase.co",
     anonKey: "eyJ...your anon public key...",
   };
   ```
   Both are safe to ship publicly — the anon key is meant to be public, and the
   database security rules (from step 2) protect the data.

## 6. Redeploy and test
1. Re-upload the app folder to your host.
2. Open the app → **Settings → חשבון וסנכרון → התחברות עם Google**.
3. Sign in. His data now syncs to the cloud. Test it: add a task on the phone,
   open the app on a computer, sign in with the same Google account — the task
   should appear.

---

## What works after this
- His data is saved in the cloud and syncs across devices.
- A fresh phone / reinstall gets his data back after signing in.
- The app still works fully offline — changes are saved locally instantly and
  pushed to the cloud in the background when there's a connection.
- The action log now uploads too (ready for the daily-email job).

## What's still to build (next milestones, on this same Supabase project)
1. **Verify the parent email** (a confirmation click) + **daily summary email**:
   a scheduled job (Supabase Cron) builds the digest from the log and sends it
   via a mail provider (a separate free signup, e.g. Resend — I'll walk you
   through it when we build this).
2. **Reminders** (web push).
3. **Image uploads** (board photos), using Supabase Storage.

## If you get stuck
Tell me which step and what you see. Common ones:
- "Sign-in popup closes and nothing happens" → usually the Site URL / Redirect
  URL in step 4 doesn't match where the app is actually served.
- "Data doesn't sync" → check the two keys in `config.js` match Project Settings
  → API exactly.
