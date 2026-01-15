# Moon Signal — Static Marketing Site

This is a **fully static** site (no build step required). It matches the Moon Signal brand:
- Dark, premium, terminal-grade
- Single purple gradient
- Calm execution, no hype
- Includes: Hero, How it works, Features, Pricing, FAQ, Privacy, Terms

## Quick start (local)
Open `index.html` directly, or run a simple static server:
- Python: `python3 -m http.server 8080`

## Render deployment (Static Site)
- **Environment:** Static Site
- **Build Command:** (leave blank)
- **Publish Directory:** `.`

## Wire Stripe Checkout links
In `index.html`, search for: `data-stripe-link=""` and paste your Stripe Checkout URLs:
- CORE button → CORE checkout link
- PRO button → PRO checkout link
- ELITE button → ELITE checkout link

## Replace the placeholder icon / logo
- Replace `assets/icon.png` with your real Moon Signal logo asset.
- If you have an SVG logo, you can embed it in the nav brand area.

Support email (edit in all pages): `support@moonsignal.xyz`
Domain placeholder for sitemap/OG tags: `https://moonsignal.xyz`
