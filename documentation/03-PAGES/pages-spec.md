# Page Specifications

Each entry: objective, structure, components used, responsive behaviour, states, source file(s). Content/copy/CTAs are exactly what's in the approved files — nothing paraphrased or invented.

## Homepage
- **Files:** Homepage.dc.html (Desktop) · Homepage Mobile.dc.html · Homepage Tablet.dc.html
- **Structure:** nav, hero (full-bleed video, right-aligned copy, 2 CTAs), Quick Start/How it works (video + 3 numbered steps), Bestsellers (horizontal scroll), Categories (grid: 4-up Desktop / 3-up Tablet / 2-up Mobile), Made by You (UGC video scroll), Reviews (4-up Desktop / 3-up Tablet, grid), Newsletter, Footer.
- **Components:** Button, Link, Input (newsletter), Product Card pattern, Category Grid pattern.
- **Responsive:** Desktop nav inline pattern kept through Tablet (fluid `clamp()` gaps mean no hamburger needed until <768px); Mobile uses the hamburger overlay (see Mobile Navigation.dc.html).
- **States:** none page-specific beyond Core Component states.

## Shop All / Category pages (Tees, Hoodies and Sweats, Athleisure, Accessories)
- **Files:** Shop All.dc.html + individual category pages (Desktop) · Category Listing Mobile.dc.html · Category Listing Tablet.dc.html
- **Structure:** banner, category quicklinks, "Most worn" scroll, Filters (inline dropdown on Desktop/Tablet, bottom sheet on Mobile) + Sort, Product Grid (4-up/3-up/2-up), Footer.
- **States:** Loading/skeleton, Empty ("No products found"), Error — all reused verbatim across breakpoints, never redesigned per-breakpoint.
- **NOT SPECIFIED:** pagination/load-more — Desktop reference has none, so none was invented for Tablet/Mobile.

## Product Page
- **Files:** Product Page.dc.html (Desktop) · Product Page Mobile.dc.html · Product Page Tablet.dc.html
- **Structure:** breadcrumb, gallery (media mosaic) + sticky info column (title, rating, price, colour/size selectors, CTA, volume pricing, accordions), Reviews (3-up on all breakpoints), Made by You, You may also like, Footer.
- **Sticky CTA decision:** Tablet keeps the Desktop two-column sticky-info-panel pattern (CTA lives inside it) — width still supports two columns at 768px+. Mobile uses a separate floating sticky bottom bar (image + CTA) since one column doesn't fit an info panel and content simultaneously.
- **States:** none beyond Core Component states; no explicit out-of-stock/unavailable state is represented in the approved references (**NOT SPECIFIED**).

## Cart (drawer)
- **Files:** cart drawer markup inside Homepage.dc.html / Shop All.dc.html / Product Page.dc.html (Desktop, identical across all three) · Cart Mobile.dc.html · Cart Tablet.dc.html
- **Structure:** free-shipping progress bar, cart item (image/name/price/variant/qty stepper/Edit Design/Remove), "You may also like" upsell scroll, trust line, Order Summary (subtotal + Checkout CTA).
- **Responsive:** the drawer is already `width:460px;max-width:100vw` on Desktop — inherently safe at Tablet/Mobile widths with zero structural change required.
- **States:** Loading/skeleton, Empty cart — reused from Phase 1/2/3A, not redesigned.

## Checkout
- **Files:** Checkout.dc.html (Desktop, includes the success state as `isSuccess`) · Checkout Mobile.dc.html · Checkout Tablet.dc.html
- **Structure:** Express checkout row (Shop Pay/PayPal/ Pay/G Pay), Contact, Delivery (address form, 2-col name / 3-col postal-city-city-select), Shipping method (placeholder message pending address), Payment (Credit card/Apple Pay/PayPal/Klarna accordion rows), CTA "Pay now", Order Summary aside (item, promo code, subtotal, shipping, total+tax).
- **Success state:** checkmark, "Your design is on its way.", order number, production-pack file downloads, "Track order"/"Keep shopping" CTAs, guest-account save prompt. **This lives inside Checkout.dc.html, kept separate from the standalone Order Confirmation.dc.html reference page — do not merge the two.**
- **States:** processing/loading (spinner in Pay now button), payment error banner, payment refused (separate reference screen), validation.
- **Tablet-specific fix:** the card-expiration placeholder is shortened to "MM / YY" (from "Expiration date (MM / YY)") purely because the narrower 2-up column clips the longer string — a Tablet-only, minimal text fix, not a Desktop/Mobile change.

## 404
- **Files:** 404.dc.html (Desktop) · 404 Tablet.dc.html — no separate Mobile file (already fluid/centred, verified at 390px as-is).
- **Structure:** logo, big "404", headline, body copy, Back to Homepage (primary) + Keep shopping (secondary) buttons, Contact support link.

## Order Confirmation
- **Files:** Order Confirmation.dc.html (Desktop) · Order Confirmation Tablet.dc.html — no separate Mobile file.
- **Structure:** success icon, order number, item list, subtotal/shipping/total, delivery address + payment method (both marked "Populated dynamically from the Medusa order object" — **IMPLEMENTATION DECISION REQUIRED** on the actual data source), next-steps note, Track order/Keep shopping CTAs.
- **Note:** intentionally kept as its own page, separate from Checkout's internal `isSuccess` state (see Checkout entry above) — the two were never merged.

## Password Recovery
- **Files:** Password Recovery.dc.html (Desktop, all 4 states in one file) · Password Recovery Tablet.dc.html — no separate Mobile file.
- **States (all 4, none removed/merged):** Initial (email input + Send reset link), Validation (empty + invalid-email errors), Success ("Check your email"), Error ("We couldn't send the link").
- **NOT SPECIFIED:** the actual reset-token/backend mechanism — visual flow only.

## Search Results
- **Files:** Search Results.dc.html (Desktop, all states in one file — no separate Mobile) · Search Results Tablet.dc.html
- **Flow:** Search → Loading → Results → No results → Error, all in one scrollable reference page.
- **Grid:** `repeat(auto-fit,minmax(220px,1fr))` — already resolves to ~3 columns at Tablet width without any hardcoded column count.

## Cookie Banner
- **Files:** Cookie Banner.dc.html (Desktop, banner + Preferences states in one file — no separate Mobile) · Cookie Banner Tablet.dc.html
- **States:** default banner (Accept all/Reject/Manage preferences), Preferences panel (Necessary locked-on, Analytics, Marketing toggles, Save preferences).
- **NOT SPECIFIED:** actual legal copy — placeholder text pending real policy content.

## Inspiration / For Teams / Who We Are
- **Files:** Inspiration.dc.html, For Teams.dc.html, Who We Are.dc.html (Desktop) · matching `*Mobile.dc.html` and `*Tablet.dc.html` for each.
- **Inspiration:** hero, category tiles (7, horizontal scroll on all breakpoints), Trending (scroll), Start from these ideas (pills + collection/template grids: 3-up Desktop → 2-up Tablet → 1-up Mobile), split CTA (2-up Desktop/Tablet, stacked Mobile), Footer.
- **For Teams:** hero (2-col), Volume pricing (5 tiers, horizontal scroll on all breakpoints), Features (4-up Desktop → 2-up Tablet → 1-up Mobile), Quote form (wide multi-column row on Desktop; **Tablet reuses the Mobile stacked-card composition** because the Desktop row genuinely doesn't fit at 768px — documented, not a copy-paste shortcut), CTA, Footer.
- **Who We Are:** hero (full-bleed dark video/copy), "Why we exist" (2-col, kept through Tablet), "From screen to garment" (5 steps, horizontal scroll all breakpoints), Studio/Human split panels (2-col, kept through Tablet), "What matters to us" (2-col Desktop+Tablet, 1-col Mobile), Manifesto (centred dark full-bleed), final CTA, Footer.

## Other Desktop-only pages (NOT extended to Tablet/Mobile in this project — NOT SPECIFIED for those breakpoints)
Dashboard.dc.html, Authentication.dc.html, Company.dc.html, Talk to us.dc.html — exist as Desktop pages; no Tablet/Mobile reference was requested or built for these.

## Internal documentation (not part of the shipped product)
Product Vision.dc.html, UX Architecture.dc.html — internal working docs with their own palette; explicitly out of scope for the Design System/handoff.
