# Design Studio Specification

The product configurator. Source: Studio Desktop.dc.html, Studio Tablet.dc.html, Studio Mobile.dc.html.

## Desktop (source of truth for functionality)
- **Top bar (56px):** logo/Homepage link, Zoom out/reset/in, Grid/Snap/Print area/Measurements toggles, View switcher (Front/Back/Sleeve pills, centred), Reset design/Undo/Redo, Share (popover: copy link, email, WhatsApp), Save, account avatar, Cart, Tools (narrow mode only).
- **Built-in responsive mechanism:** `narrow = winW < 1180` — already covers the entire Tablet range and part of what would be "large mobile". At narrow: Undo/Redo/Reset hide, Share/Save collapse to icon-only, view switcher goes inline, inspector becomes an absolute-positioned overlay (360px, `max-width:100vw`) toggled by the Tools button instead of a docked sidebar.
- **Canvas:** centred product render, pan/zoom, print-area boundary, floating warning pill (orange dot = "cut off", blue dot = "fully outside — usable on another view").
- **Inspector (docked on wide Desktop):** product/design title, colour swatches (regular + limited edition), text controls (Bold/Italic/Underline, colour incl. custom CMYK picker, outline toggle + width slider + colour), shapes/stickers panels (same colour/outline controls as text), layers, volume pricing, Add to Order CTA with price.

## Tablet (768–1023px)
- **Reference file:** Studio Tablet.dc.html — documents Studio Desktop's own existing `narrow` mode at this width range; no new layout was invented.
- Toolbar becomes icon-only-adjacent: zoom compact, Grid/Snap/Print area/Measurements sit in a horizontally-scrolling strip (intentional internal scroll, not page overflow), view switcher inline, Undo/Redo/Reset hidden, Share/Save icon-only, Tools button opens the 360px inspector overlay.
- Inspector overlay content shown: product colour swatches, Text section (Bold/Italic/Underline, colour swatches, outline toggle), Add to Order footer with price.
- **Known gap (Tablet):** the full tool set (Shapes, Stickers, Layers, CMYK picker) is condensed to the sections needed to demonstrate the responsive pattern — not removed, just not exhaustively re-drawn in this reference.

## Mobile (<768px)
- **Reference file:** Studio Mobile.dc.html, verified at 320/360/375/390/393px.
- **Header (52px):** Back, title, Undo (inline, most-used action), "•••" overflow menu (Redo, Reset design, Share, Save — grouped for density, all reachable, none removed), Cart.
- **Tool access:** horizontally-scrolling tool-category strip (Product, Colour, Text, Shapes, Stickers, Layers) — tapping a category opens a bottom sheet (not a docked/overlay sidebar) so the canvas stays visible underneath.
- **Bottom sheet (example shown — Colour/Text):** colour swatches (Radio component, 36–44px), Bold/Italic/Underline, outline toggle.
- **Fixed footer:** quantity stepper + "Add to Order — [price]" button (full width).
- **Print-area warning:** same floating pill pattern as Desktop/Tablet, repositioned to sit over the (now full-width) canvas.
- **KNOWN GAP — NOT A REGRESSION:** Shapes/Stickers/Layers tabs are present and navigable, but their internal tool content wasn't expanded in this reference (only Colour/Text were shown in detail).
- **Upload: NOT SPECIFIED** — no upload flow is represented in the Desktop/Tablet references, so none was invented for Mobile.

## Studio states (all breakpoints)
| State | Appearance | Where |
|---|---|---|
| Print-area warning (cut off) | orange dot + "Outside the print area — this will be cut off." | floating pill over canvas |
| Print-area warning (fully outside) | blue dot (reuses brand colour) + "...usable on another view instead." | floating pill over canvas |
| Selected swatch | double ring (2px white + 4px ink) | colour/product swatches |
| Outline toggle on/off | pill switch, dark = on | Text/Shapes/Stickers panels |
| Active tool tab | filled bg, contrasting text | Mobile tool strip |
| Inspector/bottom sheet open/closed | overlay vs hidden | Tablet inspector, Mobile sheet |
| Menu open/closed | dropdown vs hidden | Desktop Share/Save popovers, Mobile "•••" menu |

## Studio Design System conformance
Uses only Core Components (Button, Radio, IconButton, Checkbox) plus Studio-specific patterns (colour/outline picker, print-area warning, tool tabs) that reuse Design System tokens but are not general-purpose primitives other pages should import — see Layer 5 in the Design System spec.
