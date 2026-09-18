# File Inventory (real project paths, root-level — see README for why files were not moved)

**Real count, verified: 59 `.dc.html` files** (58 unique design files at project root + 1 duplicate copy of `Responsive Preview.dc.html` inside `responsive-preview/`, see row below).

| File | Path | Category | Device | Status |
|---|---|---|---|---|
| Design System.dc.html | / | Design System | n/a | Approved |
| Button.dc.html | / | Core Component | n/a | Approved |
| Link.dc.html | / | Core Component | n/a | Approved |
| Input.dc.html | / | Core Component | n/a | Approved |
| Select.dc.html | / | Core Component | n/a | Approved |
| Checkbox.dc.html | / | Core Component | n/a | Approved |
| Radio.dc.html | / | Core Component | n/a | Approved |
| Badge.dc.html | / | Core Component | n/a | Approved |
| IconButton.dc.html | / | Core Component | n/a | Approved |
| Homepage.dc.html | / | Page | Desktop | Approved |
| Homepage Tablet.dc.html | / | Page | Tablet | Approved |
| Homepage Mobile.dc.html | / | Page | Mobile | Approved |
| Shop All.dc.html | / | Page (Category Listing — Desktop source of truth) | Desktop | Approved |
| Tees.dc.html | / | Page (category) | Desktop | Approved |
| Hoodies and Sweats.dc.html | / | Page (category) | Desktop | Approved |
| Athleisure.dc.html | / | Page (category) | Desktop | Approved |
| Accessories.dc.html | / | Page (category) | Desktop | Approved |
| Category Listing Tablet.dc.html | / | Page | Tablet | Approved |
| Category Listing Mobile.dc.html | / | Page | Mobile | Approved |
| Product Page.dc.html | / | Page | Desktop | Approved |
| Product Page Tablet.dc.html | / | Page | Tablet | Approved |
| Product Page Mobile.dc.html | / | Page | Mobile | Approved |
| Checkout.dc.html | / | Page (incl. success state) | Desktop | Approved |
| Checkout Tablet.dc.html | / | Page | Tablet | Approved |
| Checkout Mobile.dc.html | / | Page | Mobile | Approved |
| Cart Tablet.dc.html | / | Page (cart drawer reference) | Tablet | Approved |
| Cart Mobile.dc.html | / | Page (cart drawer reference) | Mobile | Approved |
| 404.dc.html | / | Page | Desktop | Approved |
| 404 Tablet.dc.html | / | Page | Tablet | Approved |
| Order Confirmation.dc.html | / | Page | Desktop | Approved |
| Order Confirmation Tablet.dc.html | / | Page | Tablet | Approved |
| Password Recovery.dc.html | / | Page (4 states) | Desktop | Approved |
| Password Recovery Tablet.dc.html | / | Page | Tablet | Approved |
| Search Results.dc.html | / | Page (all states) | Desktop | Approved |
| Search Results Tablet.dc.html | / | Page | Tablet | Approved |
| Cookie Banner.dc.html | / | Page (banner + preferences) | Desktop | Approved |
| Cookie Banner Tablet.dc.html | / | Page | Tablet | Approved |
| Inspiration.dc.html | / | Page | Desktop | Approved |
| Inspiration Tablet.dc.html | / | Page | Tablet | Approved |
| Inspiration Mobile.dc.html | / | Page | Mobile | Approved |
| For Teams.dc.html | / | Page | Desktop | Approved |
| For Teams Tablet.dc.html | / | Page | Tablet | Approved |
| For Teams Mobile.dc.html | / | Page | Mobile | Approved |
| Who We Are.dc.html | / | Page | Desktop | Approved |
| Who We Are Tablet.dc.html | / | Page | Tablet | Approved |
| Who We Are Mobile.dc.html | / | Page | Mobile | Approved |
| Mobile Navigation.dc.html | / | Pattern reference (hamburger nav) | Mobile | Approved |
| Dashboard.dc.html | / | Page | Desktop only | Approved (no Tablet/Mobile built) |
| Authentication.dc.html | / | Page | Desktop only | Approved (no Tablet/Mobile built) |
| Company.dc.html | / | Page | Desktop only | Approved (no Tablet/Mobile built) |
| Talk to us.dc.html | / | Page | Desktop only | Approved (no Tablet/Mobile built) |
| Studio Desktop.dc.html | / | Design Studio | Desktop | Approved |
| Studio Tablet.dc.html | / | Design Studio | Tablet | Approved |
| Studio Mobile.dc.html | / | Design Studio | Mobile | Approved |
| Responsive Preview.dc.html | / | Preview/QA tool | n/a | Tool (not a product page) |
| Responsive Preview Standalone.html | / | Preview/QA tool (standalone, Netlify) | n/a | Tool (not a product page) |
| responsive-preview/index.html | /responsive-preview/ | Preview/QA tool copy | n/a | Tool (not a product page) |
| responsive-preview/Responsive Preview.dc.html | /responsive-preview/ | Preview/QA tool — duplicate copy of the root file | n/a | Tool (not a product page); confirmed present, unaltered |
| Site.dc.html | / | Reference/support file | n/a | ASSET STATUS NOT SPECIFIED |
| Product Vision.dc.html | / | Internal documentation | n/a | Out of scope for Design System |
| UX Architecture.dc.html | / | Internal documentation | n/a | Out of scope for Design System |
| studio-data.js | / | Runtime dependency (Studio garment/colour data) | n/a | Approved |
| support.js | / | Runtime dependency (DC framework) | n/a | Approved (do not edit) |
| image-slot.js | / | Runtime dependency (image placeholder component) | n/a | Approved (do not edit) |
| assets/tee-*.webp, tee-mask-*.png | /assets/ | Studio garment/mask assets | n/a | Approved |
| github.md | / | GitHub sync record | n/a | **NOT INCLUDED IN FINAL PACKAGE** — exists in the working project, intentionally left out of the exported ZIP (sync/editor metadata, not design content) |
| .image-slots.state.json | / | Editor state (image-slot placements) | n/a | **NOT INCLUDED IN FINAL PACKAGE** — exists in the working project, intentionally left out of the exported ZIP (runtime editor state, not design content) |

## Documentation (this phase)

| File | Path |
|---|---|
| README.md | / |
| CHANGELOG.md | / |
| .gitignore | / |
| handoff/WEB2PRINT-DEVELOPER-HANDOFF.md | /handoff/ |
| handoff/FILE-INVENTORY.md | /handoff/ (this file) |
| documentation/01-DESIGN-SYSTEM/design-system-spec.md | /documentation/ |
| documentation/02-COMPONENT-LIBRARY/component-library-spec.md | /documentation/ |
| documentation/03-PAGES/pages-spec.md | /documentation/ |
| documentation/04-DESIGN-STUDIO/design-studio-spec.md | /documentation/ |
| documentation/05-RESPONSIVE/responsive-spec.md | /documentation/ |
| documentation/06-IMPLEMENTATION-HANDOFF/implementation-handoff.md | /documentation/ |
| documentation/07-FINAL-REFERENCE/reference-map.md | /documentation/ |
| documentation/07-FINAL-REFERENCE/developer-checklist.md | /documentation/ |

## Not included in this repository

- `github-export/` and `uploads/` directories exist in the working project but are export/user-upload artifacts, not approved design files — **ASSET STATUS NOT SPECIFIED**, left out of this inventory's "approved" categorisation pending explicit confirmation.
- `design-system-update/`, `phase-3a*/`, `phase-3b*/`, `responsive-preview-netlify*/` folders are ZIP-staging copies created during earlier delivery phases — duplicates of already-listed root files, not separate approved content.
