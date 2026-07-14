# המשימות שלי — homework & test tracker (PWA)

A phone-first task tracker: capture homework/tests in 3 taps, see what's due in the
next two weeks grouped by urgency. Installs to the home screen and works offline.

## What's here
- `index.html`, `styles.css`, `app.js` — the app (screens, flow, logic)
- `storage.js` — the data layer (see "Moving to a cloud backend" below)
- `sw.js`, `manifest.json`, `icon-*.png` — the PWA plumbing (offline + installable)

## Running it
It's all static files, but a service worker + manifest need to be served over
**http/https**, not opened as `file://`. Two easy ways:

**Locally, to try it:**
```
cd hw-app
python3 -m http.server 8080
```
Then open `http://localhost:8080` on your computer, or on the phone use your
computer's IP (`http://192.168.x.x:8080`) while on the same Wi-Fi.

**For real use (so it's always available on his phone):** deploy the folder to any
free static host — Netlify (drag-and-drop the folder), Vercel, GitHub Pages, or
Cloudflare Pages. You'll get an https URL that works from anywhere.

## Installing to the home screen
- **iPhone (Safari):** Share button → "Add to Home Screen".
- **Android (Chrome):** menu (⋮) → "Install app" / "Add to Home screen".
It then opens full-screen with its own icon, like a normal app, and works offline.

## Current state of the data
Right now everything is stored **on the device** (localStorage). That means it
survives closing the app and works offline, but it does NOT yet sync across devices
or survive a lost/wiped phone. That's the next step (below) — the app was built so
this is a clean change.

## Moving to a cloud backend later
Every read/write goes through `Store` in `storage.js`, and nothing else in the app
touches storage directly. To add accounts + cloud sync (so data survives a lost
phone, and to support board photos and notes later), replace the method bodies in
`storage.js` with `fetch()` calls to your API. The methods are already async, so the
rest of the app doesn't change. The shape to keep:
- `getTasks() / saveTasks(tasks)`
- `getSubjects() / saveSubjects(subs)`
- `getSettings() / saveSettings(settings)`

Planned future fields already accounted for in a task object: `id, subject, type,
given, finish, done, doneAt, createdAt`. Adding `photos: []` and `notes: ''` later
is additive.

## Notes / not-yet-built
- **Reminders:** scheduled notifications need the backend + a small amount of
  service-worker push wiring; not included in this first version. The app currently
  reminds by grouping "עכשיו / השבוע / בהמשך" every time it opens.
- **Board photos & notes with links:** designed-for (see above) but not built yet.

## Renaming the app
Change `APP_NAME` at the top of `app.js` (one line) — e.g. `'SchoolNinja'`,
`'SchoolHero'`, or `'Skewl'`. Also update `name`/`short_name` in `manifest.json`
so the home-screen icon label matches. The header shows this name plus a live
status line ("2 משימות להיום · אחת עברה את הזמן", or "הכול רגוע" when nothing's due).

## Subject color + icon
Each subject has a color and an icon, both chosen when adding/editing it in
settings. The color tints the subject everywhere it appears, so the list is
scannable by color as well as icon shape. Custom photo upload per subject is
deferred to the cloud-backend stage (same place board photos live), to avoid
bloating on-device storage.

## Task content: sources + notes (added)
Each task's detail screen now has:
- **"איפה החומר?" source chips** — a one-tap row drawn from a global, configurable
  source list (Google Classroom, school site, WhatsApp, Drive, notebook, etc.).
  Tapping a chip tags where the material lives; if that source has a URL, an
  "open" link appears. Manage the list in Settings → מקורות (add/edit/remove,
  each with its own icon, color, and optional URL).
- **Notes** — free text with auto-detected clickable links (paste a URL and it
  becomes tappable). Edit via "עריכת ההערות".

Sources are stored via `Store.getSources()/saveSources()` — same swappable pattern
as everything else, ready for the cloud backend.

## Still to come (need the cloud backend)
- **Reminders** at set times (a closed web app can't self-wake without push infra).
- **Image uploads** on a task (board photos, worksheets) — deferred to avoid
  bloating on-device storage; belongs with sync.

## Action log + daily parent summary (added, backend-shaped)
- **Action log:** every meaningful event (add, done, date change, notes, source
  tag, delete) is appended to an append-only log via `Store.appendLog()`, stored
  in the exact shape the backend table will use: `{id, ts, event, taskId, data}`.
  Full fidelity is kept; the daily email summarizes. Local cap ~2000 entries;
  the backend keeps the complete history.
- **Parent email** field in Settings (shown openly to the kid: "סיכום יומי נשלח
  ל: ..."). Stored now; will require a one-time verification click once the
  backend can send mail. `parentEmailVerified` flag is already in the model.
- **Digest builder** (`buildDigest`) produces the exact object the daily email
  will render — an "actions today" section (with assigned-vs-logged gaps) and a
  "status now" section (overdue / due today / due tomorrow). Previewable in-app
  via Settings → "תצוגה מקדימה של הסיכום".

### What the backend needs to do (when it lands)
1. Sync tasks/subjects/sources/settings/log per account.
2. Verify the parent email (confirmation link).
3. A daily scheduled job: build the digest server-side from the synced log +
   tasks and email it to the verified parent address.
Then: reminders (push), then image uploads.
