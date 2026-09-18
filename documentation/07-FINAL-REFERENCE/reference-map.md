# Final Reference Map

## Site pages

| Page/Pattern | Desktop | Tablet | Mobile | Core Components used | Responsive notes |
|---|---|---|---|---|---|
| Homepage | Homepage.dc.html | Homepage Tablet.dc.html | Homepage Mobile.dc.html | Button, Link, Input | Nav inline through Tablet; hamburger only <768px |
| Category listing | Shop All.dc.html (+ Tees/Hoodies and Sweats/Athleisure/Accessories) | Category Listing Tablet.dc.html | Category Listing Mobile.dc.html | Button, Badge, Checkbox, Radio | Filters: inline dropdown Desktop/Tablet, bottom sheet Mobile |
| Product Page | Product Page.dc.html | Product Page Tablet.dc.html | Product Page Mobile.dc.html | Button, Link, Radio | Sticky CTA in info column (Desktop/Tablet) vs floating bottom bar (Mobile) |
| Cart | drawer in Homepage/Shop All/Product Page | Cart Tablet.dc.html | Cart Mobile.dc.html | Button, Link | Drawer already `max-width:100vw`-safe at every breakpoint |
| Checkout | Checkout.dc.html (incl. success state) | Checkout Tablet.dc.html | Checkout Mobile.dc.html | Button, Input, Select, Checkbox | 2-col form+summary kept through Tablet |
| 404 | 404.dc.html | 404 Tablet.dc.html | — (already fluid) | Button, Link | n/a |
| Order Confirmation | Order Confirmation.dc.html | Order Confirmation Tablet.dc.html | — (already fluid) | Button | Kept separate from Checkout success |
| Password Recovery | Password Recovery.dc.html (4 states) | Password Recovery Tablet.dc.html | — (already fluid) | Input, Button, Link | All 4 states preserved everywhere |
| Search Results | Search Results.dc.html (all states) | Search Results Tablet.dc.html | — (already fluid) | Input, Link | `auto-fit,minmax(220px,1fr)` grid self-adjusts |
| Cookie Banner | Cookie Banner.dc.html (banner+prefs) | Cookie Banner Tablet.dc.html | — (already fluid) | Button, Link | Horizontal banner kept through Tablet |
| Inspiration | Inspiration.dc.html | Inspiration Tablet.dc.html | Inspiration Mobile.dc.html | Button, Link | 7-item rows always scroll |
| For Teams | For Teams.dc.html | For Teams Tablet.dc.html | For Teams Mobile.dc.html | Button, Link | Quote form: Tablet reuses Mobile composition (documented) |
| Who We Are | Who We Are.dc.html | Who We Are Tablet.dc.html | Who We Are Mobile.dc.html | Button, Link | 2-col panels kept through Tablet |
| Mobile Navigation (pattern) | n/a (Desktop nav is inline) | n/a | Mobile Navigation.dc.html | IconButton | Reference for the hamburger overlay pattern |

## Studio

| | Desktop | Tablet | Mobile |
|---|---|---|---|
| File | Studio Desktop.dc.html | Studio Tablet.dc.html | Studio Mobile.dc.html |
| Toolbar | full, labelled | icon-heavy, scroll strip for toggles | header + "•••" overflow |
| Tools access | docked inspector | overlay (360px) via Tools button | bottom sheet per category |
| Known gaps | none | tool content condensed (documented) | Shapes/Stickers/Layers not expanded; Upload NOT SPECIFIED |

## Design System / Component Library
Design System.dc.html · Button.dc.html · Link.dc.html · Input.dc.html · Select.dc.html · Checkbox.dc.html · Radio.dc.html · Badge.dc.html · IconButton.dc.html
