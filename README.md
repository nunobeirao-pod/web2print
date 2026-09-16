# Web2Print

Prototype site + design studio for a custom-print apparel shop, built as static HTML pages (no build step, no bundler).

## Structure
- `Homepage.dc.html`, `Shop All.dc.html`, `Tees.dc.html`, `Hoodies and Sweats.dc.html`, `Athleisure.dc.html`, `Accessories.dc.html`, `Sports Bra.dc.html`, `Crop Tee 190.dc.html`, `Oversized Hoodie 330.dc.html`, `Product Page.dc.html` — marketing & catalogue pages
- `Studio Desktop.dc.html` — the desktop product customisation studio (main tool)
- `Checkout.dc.html`, `Authentication.dc.html`, `Dashboard.dc.html` — cart/checkout/account flow
- `For Teams.dc.html`, `Company.dc.html`, `Who We Are.dc.html`, `Talk to us.dc.html`, `Inspiration.dc.html`, `AI Studio.dc.html`, `Site.dc.html` — remaining site pages
- `UX Architecture.dc.html`, `Product Vision.dc.html` — internal design/reference docs, not customer-facing
- `studio-data.js` — product, colour, sizing and pricing data used by the Studio
- `support.js` — runtime loader for the `.dc.html` component format (parses each page's template/logic at load time)
- `image-slot.js` — drag-and-drop image placeholder component
- `assets/` — garment photos and print-area masks used by the Studio
- `uploads/` — product photography, banners and payment/logo icons used across the site

## Running it
Every `.dc.html` file is self-contained and can be opened directly in a browser, or served with any static file server (e.g. GitHub Pages) — no build step required. Start at `Homepage.dc.html`.

## Notes
- All pages are React-based single files using the `.dc.html` runtime (`support.js`); there is no separate JS framework or package.json.
- Links between pages are plain relative `<a>` tags, so the site works unmodified from any static host, including GitHub Pages served from the repo root.
