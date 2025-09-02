# Weekly Mental Upgrade — Interactive Timer Sheet

A single-file, offline-friendly web app for your 7‑day mental upgrade loop.

## Quick Deploy (GitHub Pages)
1. Create a new repo named **WeeklyMentalUpgrade** (or anything).
2. Upload these files to the repo root:
   - `index.html`
   - `sw.js`
   - `manifest.webmanifest`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
3. Go to **Settings → Pages** → Set **Source** to `main` and **Root`** (`/`), then **Save`**.
4. Wait ~1 minute. Open the URL it shows (e.g., `https://<you>.github.io/<repo>/`).

## iPhone Install
- Open the site in Safari → **Share** → **Add to Home Screen**.
- First user interaction (e.g., starting a timer) enables the beep.
- All data is stored locally in your browser (localStorage).

## Notes
- Works offline via a minimal service worker (runtime cache).
- No analytics, no external deps.
- To reset a day, use **Clear Day Data**.
- To export a text log, use **Export Day Log**.
