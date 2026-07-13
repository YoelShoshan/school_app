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
