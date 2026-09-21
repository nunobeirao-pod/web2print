/* Real catalogue/pricing data ported from the mobile Web2Print studio (build 121).
   Garment photography/masks are not embedded here — the desktop build uses
   image-slot placeholders for garment views instead of the original's traced
   photo masks; everything else (colours, fonts, shapes, pricing) is verbatim. */
window.STUDIO = (function () {
  /* Garment colourways — same palette as the product pages (core + limited edition). */
  const COLOURS = [
    ['Black', '#1C1B19'], ['White', '#F5F3ED'], ['Beige', '#D9C9AE'], ['Dark Brown', '#4A3427'], ['Navy', '#1F2A44'],
    ['Lilac', '#C9B8E8'], ['Butter Yellow', '#F5DE8A'], ['Sky Blue', '#A9D3E6'], ['Baby Pink', '#F3C4D0'], ['Lime Green', '#C6E86B'],
    ['Grey Melange', '#B9B5AD'], ['Forest', '#2E5A44'], ['Bordeaux', '#5E2233'], ['Sand', '#D9C6A8']
  ];
  const INK = ['#15181F', '#FFFFFF', '#C42B2B', '#12463A', '#1F2E52'];
  const FONTS = [
    ['Grotesk', 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif', 700, 'Sans'],
    ['Serif', 'Georgia,"Times New Roman",serif', 700, 'Sans'],
    ['Mono', 'ui-monospace,Menlo,Consolas,monospace', 700, 'Sans'],
    ['Anton', '"Anton",sans-serif', 400, 'Team'],
    ['Bebas Neue', '"Bebas Neue",sans-serif', 400, 'Team'],
    ['Teko', '"Teko",sans-serif', 700, 'Team'],
    ['Squada One', '"Squada One",sans-serif', 400, 'Team'],
    ['Staatliches', '"Staatliches",sans-serif', 400, 'Team'],
    ['Graduate', '"Graduate",serif', 400, 'Team'],
    ['Archivo Black', '"Archivo Black",sans-serif', 400, 'Team'],
    ['Rubik Mono', '"Rubik Mono One",sans-serif', 400, 'Team'],
    ['Bungee', '"Bungee",sans-serif', 400, 'Team'],
    ['Oswald', '"Oswald",sans-serif', 600, 'Sans'],
    ['Barlow Cond.', '"Barlow Condensed",sans-serif', 700, 'Sans'],
    ['Fjalla One', '"Fjalla One",sans-serif', 400, 'Sans'],
    ['Montserrat', '"Montserrat",sans-serif', 800, 'Sans'],
    ['Playfair', '"Playfair Display",serif', 800, 'Serif'],
    ['Bangers', '"Bangers",cursive', 400, 'Fun'],
    ['Permanent Mk', '"Permanent Marker",cursive', 400, 'Fun'],
    ['Pacifico', '"Pacifico",cursive', 400, 'Fun'],
    ['Lobster', '"Lobster",cursive', 400, 'Fun']
  ];
  const FONT_CATS = ['Team', 'Sans', 'Serif', 'Fun'];
  const METHODS = [
    { id: 'dtf', t: 'Digital Transfer', s: 'Best value for this design', unit: 3.03 },
    { id: 'emb', t: 'Embroidery', s: 'Premium feel, stitched into the fabric', unit: 12.14 },
    { id: 'oth', t: 'Other', s: 'Personalised woven or printed label', unit: 3.41 }
  ];
  const SHAPES = [
    { id: 'rect', t: 'Square', svg: c => `<rect x="2" y="2" width="96" height="96" rx="8" fill="${c}"/>` },
    { id: 'circle', t: 'Circle', svg: c => `<circle cx="50" cy="50" r="48" fill="${c}"/>` },
    { id: 'line', t: 'Line', svg: c => `<rect x="0" y="4" width="160" height="12" rx="6" fill="${c}"/>`, box: '0 0 160 20' },
    { id: 'triangle', t: 'Triangle', svg: c => `<path d="M50 4 L96 88 L4 88 Z" fill="${c}"/>` },
    { id: 'star', t: 'Star', svg: c => `<path d="M50 3 L61 37 L97 37 L68 58 L79 93 L50 72 L21 93 L32 58 L3 37 L39 37 Z" fill="${c}"/>` },
    { id: 'heart', t: 'Heart', svg: c => `<path d="M50 86C50 86 8 58 8 32C8 16 20 6 35 6C43 6 50 12 50 12C50 12 57 6 65 6C80 6 92 16 92 32C92 58 50 86 50 86Z" fill="${c}"/>` },
    { id: 'pentagon', t: 'Pentagon', svg: c => `<path d="M50 3 L96 37 L79 92 L21 92 L4 37 Z" fill="${c}"/>` },
    { id: 'hexagon', t: 'Hexagon', svg: c => `<path d="M50 3 L93 25 L93 65 L50 87 L7 65 L7 25 Z" fill="${c}"/>` },
    { id: 'arrow-r', t: 'Arrow right', svg: c => `<path d="M8 35 H58 V12 L96 50 L58 88 V65 H8 Z" fill="${c}"/>` },
    { id: 'arrow-l', t: 'Arrow left', svg: c => `<path d="M92 35 H42 V12 L4 50 L42 88 V65 H92 Z" fill="${c}"/>` }
  ];
  const STICKERS = [
    { id: 'star', t: 'Star', svg: c => `<path d="M50 3 L61 37 L97 37 L68 58 L79 93 L50 72 L21 93 L32 58 L3 37 L39 37 Z" fill="${c}"/>` },
    { id: 'heart', t: 'Heart', svg: c => `<path d="M50 86C50 86 8 58 8 32C8 16 20 6 35 6C43 6 50 12 50 12C50 12 57 6 65 6C80 6 92 16 92 32C92 58 50 86 50 86Z" fill="${c}"/>` },
    { id: 'thumb', t: 'Thumbs up', svg: c => `<path d="M30 42h14l9-28c2-6 12-4 12 3v22h20c6 0 10 6 8 12l-10 30c-2 5-6 8-11 8H30V42Z" fill="${c}"/><rect x="8" y="42" width="18" height="46" rx="4" fill="${c}"/>` },
    { id: 'flag', t: 'Flag', svg: c => `<rect x="14" y="6" width="8" height="88" rx="3" fill="${c}"/><path d="M22 12c18-10 32 10 50 0v42c-18 10-32-10-50 0V12Z" fill="${c}"/>` },
    { id: 'crown', t: 'Crown', svg: c => `<path d="M8 30 L28 46 L50 12 L72 46 L92 30 L84 70 H16 Z" fill="${c}"/>` },
    { id: 'bolt', t: 'Lightning', svg: c => `<path d="M40 2 L8 56 H30 L22 98 L64 40 H40 L52 2 Z" fill="${c}"/>` },
    { id: 'chat', t: 'Speech', svg: c => `<path d="M6 10h88v56H40l-16 18v-18H6Z" fill="${c}"/>` },
    { id: 'sun', t: 'Sun', svg: c => `<circle cx="50" cy="50" r="24" fill="${c}"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="47" y="2" width="6" height="20" rx="3" fill="${c}" transform="rotate(${a} 50 50)"/>`).join('')}` },
    { id: 'check', t: 'Check badge', svg: c => `<circle cx="50" cy="50" r="46" fill="${c}"/><path d="M30 52 L44 66 L72 34" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` }
  ];
  const FRAMES = [
    { id: 'circle', t: 'Circle', clip: 'circle(50% at 50% 50%)' },
    { id: 'rect', t: 'Square', clip: 'inset(0 round 8%)' },
    { id: 'triangle', t: 'Triangle', clip: 'polygon(50% 0%, 100% 100%, 0% 100%)' },
    { id: 'star', t: 'Star', clip: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 93%, 50% 72%, 21% 93%, 32% 57%, 2% 35%, 39% 35%)' },
    { id: 'hexagon', t: 'Hexagon', clip: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' },
    { id: 'heart', t: 'Heart', clip: 'polygon(50.0% 95.6%, 20.0% 71.1%, 8.0% 44.4%, 8.0% 35.6%, 14.0% 20.0%, 24.0% 8.9%, 35.0% 6.7%, 43.0% 10.0%, 50.0% 17.8%, 57.0% 10.0%, 65.0% 6.7%, 76.0% 8.9%, 86.0% 20.0%, 92.0% 35.6%, 92.0% 44.4%, 80.0% 71.1%)' }
  ];
  /* colours / limited are indices into COLOURS — the colourways each product is actually made in. */
  const PRODUCTS = [
    { id: 'tee', t: 'Premium T-Shirt', base: 7.20, sizes: ['S', 'M', 'L', 'XL', '2XL'], img: 'uploads/T-shirts.jpg', meta: '190 gsm · Regular fit', colours: [0, 1, 2, 3, 4], limited: [5, 6, 7, 8, 9] },
    { id: 'polo', t: 'Piqué Polo', base: 14.90, sizes: ['S', 'M', 'L', 'XL', '2XL'], img: 'uploads/Polos_1st.jpg', meta: '220 gsm · Piqué', colours: [0, 1, 4, 11, 12], limited: [7, 9] },
    { id: 'sweat', t: 'Crew Sweatshirt', base: 19.50, sizes: ['S', 'M', 'L', 'XL', '2XL'], img: 'uploads/Sweatshirts_1st.jpg', meta: '300 gsm · Brushed', colours: [0, 1, 2, 4, 10], limited: [5, 6] },
    { id: 'hoodie', t: 'Hooded Sweatshirt', base: 24.80, sizes: ['S', 'M', 'L', 'XL', '2XL'], img: 'uploads/Hoodies_1st.jpg', meta: '300 gsm · Regular fit', colours: [0, 1, 2, 3, 4], limited: [5, 6, 8] },
    { id: 'cap', t: 'Structured Cap', base: 9.40, sizes: ['One size'], img: 'uploads/Caps_1st.jpg', meta: 'One size', colours: [0, 1, 4, 13], limited: [] }
  ];
  const ORDER = ['Front', 'Back', 'Left', 'Right', 'Neck'];
  /* Real garment photography, ported verbatim from the mobile build (build 121) —
     saved as assets/tee-*.webp. Print-area boxes are fractions (0-1) of each
     photo's own width/height, eyeballed against the photo since the real traced
     alpha masks weren't ported; w/h are the source photos' natural pixel size. */
  /* Real per-size max print width (cm), traced from the size chart — the Studio canvas
     is authored against the M reference (SIZE_PRINT_CM.M); every other size's production
     file is the same design scaled to its own garment's real printable width. */
  const SIZE_PRINT_CM = { S: 46, M: 50, L: 54, XL: 58, '2XL': 62 };
  const GARMENT_VIEWS = {
    Front: { src: 'assets/tee-front.webp', mask: 'assets/tee-mask-front.png', w: 760, h: 773, box: { x: .2210, y: .0131, w: .5568, h: .9858 } },
    Back: { src: 'assets/tee-back.webp', mask: 'assets/tee-mask-back.png', w: 760, h: 773, box: { x: .2242, y: .0120, w: .5528, h: .9869 } },
    Left: { src: 'assets/tee-left.webp', mask: 'assets/tee-mask-left.png', w: 760, h: 1390, box: { x: .1933, y: .2837, w: .6033, h: .3293 } },
    Right: { src: 'assets/tee-right.webp', mask: 'assets/tee-mask-right.png', w: 760, h: 1389, box: { x: .2044, y: .2845, w: .6022, h: .3289 } },
    Neck: { src: 'assets/tee-neck.webp', mask: 'assets/tee-mask-neck.png', w: 620, h: 554, box: { x: .2678, y: .1322, w: .4556, h: .1883 } }
  };
  const BASE_L = 0.70;
  const AI_IDEAS = [
    'Put my logo on the front left chest and add a fun quote about deadlines on the back',
    'Design the t-shirt in black with “ACME Corp” in bold white text on the front',
    'A minimal running club badge for the left sleeve'
  ];
  const FIELDS = { number: { t: 'Number', sample: '10' }, name: { t: 'Name', sample: 'SILVA' } };
  const VARIABLE_UNIT = 1.20, SETUP_POS = 6.00;
  const discountFor = q => q >= 1000 ? .07 : q >= 500 ? .06 : q >= 250 ? .05 : q >= 100 ? .04 : q >= 50 ? .03 : q >= 25 ? .02 : q >= 10 ? .01 : 0;
  const sizeUp = s => s === '2XL' ? 1.50 : s === '3XL' ? 2.50 : 0;
  /* Real CMYK-style print-ink approximation, used by the Proof panel to preview
     how an uploaded image's colours will shift once printed. */
  const INKLIMIT = 0.94, GCR = 1.00, UCR = 0.90, YN = 1.40;
  function toPrint(r, g, b) {
    let c = (1 - r) * INKLIMIT, m = (1 - g) * INKLIMIT, y = (1 - b) * INKLIMIT;
    const k = Math.min(c, m, y) * GCR;
    c -= k * UCR; m -= k * UCR; y -= k * UCR;
    y *= YN;
    const rr = 1 - Math.min(1, c + k), gg = 1 - Math.min(1, m + k), bb = 1 - Math.min(1, y + k);
    return [rr * 255, gg * 255, bb * 255];
  }
  return { COLOURS, INK, FONTS, FONT_CATS, METHODS, SHAPES, STICKERS, FRAMES, PRODUCTS, ORDER, GARMENT_VIEWS, BASE_L, AI_IDEAS, FIELDS, VARIABLE_UNIT, SETUP_POS, SIZE_PRINT_CM, discountFor, sizeUp, toPrint };
})();
