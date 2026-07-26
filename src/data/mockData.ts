import { Product, BlogPost, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'beauty-selfcare',
    name: 'Beauty & Self-Care',
    slug: 'beauty-selfcare',
    description: 'Nourishing skincare, aesthetic vanity essentials, and luminous glow rituals.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
    accentColor: '#EFB7C8'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    description: 'Minimalist ceramics, cozy neutral textiles, and elevated living space aesthetics.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    itemCount: 24,
    accentColor: '#C8A96A'
  },
  {
    id: 'home-organization',
    name: 'Home Organization',
    slug: 'home-organization',
    description: 'Clear acrylic organizers, pantry bins, and clutter-free storage solutions.',
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    itemCount: 15,
    accentColor: '#EADFD7'
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description: 'Aromatherapy diffusers, organic matcha sets, and mindfulness rituals.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    itemCount: 12,
    accentColor: '#EFB7C8'
  },
  {
    id: 'kitchen-essentials',
    name: 'Kitchen Essentials',
    slug: 'kitchen-essentials',
    description: 'Aesthetic glassware, sleek coffee stations, and viral kitchen prep tools.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: 20,
    accentColor: '#C8A96A'
  },
  {
    id: 'fitness',
    name: 'Fitness',
    slug: 'fitness',
    description: 'Pastel pilates mats, aesthetic dumbbells, and chic activewear accessories.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    itemCount: 10,
    accentColor: '#FAF0F4'
  },
  {
    id: 'lifestyle-gadgets',
    name: 'Lifestyle Gadgets',
    slug: 'lifestyle-gadgets',
    description: 'Minimalist wireless chargers, sunset lamps, and compact smart desk items.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
    accentColor: '#EADFD7'
  },
  {
    id: 'gift-ideas',
    name: 'Gift Ideas',
    slug: 'gift-ideas',
    description: 'Thoughtful, beautifully packaged presents for housewarmings, birthdays & self-love.',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    itemCount: 22,
    accentColor: '#EFB7C8'
  },
  {
    id: 'trending-finds',
    name: 'Trending AliExpress Finds',
    slug: 'trending-finds',
    description: 'The viral TikTok & Pinterest products everyone is obsessing over this month on AliExpress.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    itemCount: 30,
    accentColor: '#C8A96A'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Aesthetic Ceramic Ribbed Vase Set of 2',
    slug: 'aesthetic-ceramic-ribbed-vase-set',
    category: 'Home Decor',
    categorySlug: 'home-decor',
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80'
    ],
    price: '$34.99',
    originalPrice: '$45.00',
    rating: 4.9,
    reviewCount: 1420,
    shortDescription: 'Handcrafted Nordic matte ceramic donut & ribbed vases perfect for pampas grass and minimalist coffee table styling.',
    fullReview: `The GlowNest team tested this ribbed ceramic vase set across three different home layouts—and it instantly elevated every single space. Crafted from high-fired natural terracotta with a smooth, unglazed matte cream finish, these vases bring tactile warmth to neutral decor palettes.

Whether paired with dried pampas grass, eucalyptus sprays, or displayed empty as sculptural art pieces, their off-center geometric silhouette captures ambient light effortlessly.

Why it stands out:
- Sturdy weighted base prevents accidental tipping
- Waterproof lining inside allows for fresh floral arrangements
- Packaged in premium foam padding, ideal for gifting`,
    pros: [
      'Versatile aesthetic suitable for Japandi, Scandinavian, and Boho spaces',
      'Waterproof interior lining for live flowers',
      'High-grade matte finish that does not smudge easily',
      'Includes two complementary heights (8" and 6")'
    ],
    cons: [
      'Matte texture requires gentle wiping with damp cloth if dust collects',
      'Heavy ceramic requires careful placement around toddlers'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006123456.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Home Decor', 'Nordic', 'Vase', 'Minimalist', 'AliExpress Choice'],
    specifications: {
      'Material': '100% High-Fired Ceramic',
      'Dimensions': 'Large: 8.2" x 5.5", Small: 6.1" x 4.3"',
      'Finish': 'Matte Chalk Off-White',
      'Waterproof': 'Yes, fully glazed interior'
    },
    updatedDate: '2026-07-20'
  },
  {
    id: 'prod-2',
    title: 'Rose Quartz Facial Ice Roller & Gua Sha Set',
    slug: 'rose-quartz-facial-ice-roller-gua-sha-set',
    category: 'Beauty & Self-Care',
    categorySlug: 'beauty-selfcare',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    price: '$22.50',
    originalPrice: '$29.99',
    rating: 4.8,
    reviewCount: 3890,
    shortDescription: 'Authentic Brazilian rose quartz roller with stainless steel noise-free frame for de-puffing, lymphatic drainage, and natural glow.',
    fullReview: `If your morning routine needs a calming luxury reset, this natural Rose Quartz Gua Sha & Roller duo is an absolute gamechanger. Cool to the touch right out of the box, stored in your vanity fridge it delivers instant morning de-puffing and relieves tension along the jawline and brow bone.

Unlike cheaper plastic imitations, this set uses 100% natural Brazilian rose quartz crystal attached with a reinforced zinc-alloy handle that never squeaks during use.

Pro Tip: Apply 3 drops of your favorite squalane or jojoba face oil before performing upward lymphatic strokes.`,
    pros: [
      '100% genuine Rose Quartz stone retains chill longer',
      'Silent silicone insert prevents squeaking noises',
      'Smooth hand-polished Gua Sha edges gentle on sensitive skin',
      'Luxury velvet storage pouch included'
    ],
    cons: [
      'Natural stone can crack if dropped onto tile floors',
      'Requires gentle hand washing after oil application'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006234567.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Skincare', 'Gua Sha', 'Self-Care', 'Glow', 'Beauty Routine'],
    specifications: {
      'Stone Type': '100% Natural Rose Quartz',
      'Frame': 'Reinforced Rose Gold Zinc Alloy',
      'Included': 'Dual Roller, Heart Gua Sha, Velvet Pouch'
    },
    updatedDate: '2026-07-22'
  },
  {
    id: 'prod-3',
    title: '3-Tier Clear Acrylic Drawer Makeup & Skincare Organizer',
    slug: '3-tier-clear-acrylic-drawer-makeup-skincare-organizer',
    category: 'Home Organization',
    categorySlug: 'home-organization',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    price: '$28.99',
    originalPrice: '$36.00',
    rating: 4.9,
    reviewCount: 2150,
    shortDescription: 'Crystal clear stackable drawers with soft velvet lining pads for vanity counters, skincare products, and jewelry storage.',
    fullReview: `Clear out the counter clutter with this sleek, architectural acrylic organizer. Featuring three smooth-sliding pullout drawers and top brush compartments, it keeps serums, lipsticks, brushes, and compacts completely organized while showcasing your favorite packaging.

Constructed from shatter-resistant acrylic that resists yellowing over time, it looks right at home on high-end bathroom marble tops.`,
    pros: [
      'Heavy-duty 4mm thick acrylic that feels like glass',
      'Removable non-slip velvet drawer liners',
      'Modular design—can stack additional tiers',
      'Dust-proof enclosed drawers keep items pristine'
    ],
    cons: [
      'Tall hairsprays must sit on the top tray',
      'Avoid abrasive sponges during cleaning to prevent scratches'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006345678.html',
    isTrending: false,
    isFeatured: true,
    isChoice: true,
    tags: ['Organization', 'Vanity', 'Acrylic', 'Skincare Storage'],
    specifications: {
      'Material': 'BPA-Free Clear Acrylic',
      'Dimensions': '11" W x 7.5" D x 12" H',
      'Drawers': '3 Full-Width Drawers + Top Tray'
    },
    updatedDate: '2026-07-18'
  },
  {
    id: 'prod-4',
    title: 'Ultrasonic Waterless Essential Oil Diffuser with Soft Ambient Light',
    slug: 'ultrasonic-waterless-essential-oil-diffuser',
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    price: '$42.00',
    originalPrice: '$55.00',
    rating: 4.7,
    reviewCount: 1820,
    shortDescription: 'Whisper-quiet ceramic ultrasonic aroma diffuser with warm amber LED glow, automatic safety shutoff, and 12-hour continuous mist.',
    fullReview: `Transform your bedroom or reading nook into a spa sanctuary. This ceramic body diffuser combines subtle warm ambient lighting with cold mist atomization that preserves the full therapeutic properties of pure essential oils.

Features 4 timer settings (1h, 3h, 6h, or continuous) and an intelligent waterless auto-off switch so you can fall asleep peacefully to lavender mist.`,
    pros: [
      'Handcrafted real ceramic shell in cream white',
      'Whisper-quiet operation (<20dB noise level)',
      'Dual mist modes: Continuous or 30-sec interval',
      'Warm candlelight hue LED that can be turned off independently'
    ],
    cons: [
      'Requires regular cleaning with vinegar to prevent oil residue',
      '300ml capacity covers up to 400 sq ft rooms'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006456789.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Aromatherapy', 'Wellness', 'Diffuser', 'Sleep', 'Spa'],
    specifications: {
      'Water Tank': '300ml',
      'Coverage': 'up to 400 sq. ft.',
      'Materials': 'Real Ceramic + BPA-free PP'
    },
    updatedDate: '2026-07-21'
  },
  {
    id: 'prod-5',
    title: 'Aesthetic Ribbed Glassware Set with Bamboo Lids & Straws (4-Pack)',
    slug: 'ribbed-glassware-set-bamboo-lids-straws',
    category: 'Kitchen Essentials',
    categorySlug: 'kitchen-essentials',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    price: '$24.99',
    originalPrice: '$32.00',
    rating: 4.9,
    reviewCount: 4500,
    shortDescription: 'Vintage 16oz origami style fluted can-shaped glasses with natural bamboo leak-proof lids and bent glass drinking straws.',
    fullReview: `These viral ribbed glasses are an absolute Pinterest staple for iced matcha lattes, cold brews, fruit infusions, and smoothies. Made from high-borosilicate durable glass that handles hot liquids up to 300°F and freezing iced drinks without thermal shock.

The tight silicone seal around the natural bamboo lid keeps beverages spill-safe while working at your desk or relaxing on the patio.`,
    pros: [
      'Durable heat-resistant high borosilicate glass',
      'Includes 4 glass straws and 2 straw cleaning brushes',
      'Dishwasher safe glass body',
      'Origami ribbed pattern provides secure tactile grip'
    ],
    cons: [
      'Bamboo lids should be hand washed and dried thoroughly',
      'Glass straws require careful storage'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006567890.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Glassware', 'Kitchen', 'Iced Coffee', 'Matcha', 'Pinterest Viral'],
    specifications: {
      'Capacity': '16 oz (470 ml)',
      'Material': 'Borosilicate Glass + Natural Bamboo',
      'Temperature Range': '-4°F to 300°F'
    },
    updatedDate: '2026-07-24'
  },
  {
    id: 'prod-6',
    title: 'Non-Slip TPE Eco Pilates & Yoga Mat with Carrying Strap',
    slug: 'non-slip-pilates-yoga-mat-carrying-strap',
    category: 'Fitness',
    categorySlug: 'fitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    price: '$38.00',
    originalPrice: '$48.00',
    rating: 4.8,
    reviewCount: 1290,
    shortDescription: 'Extra thick 1/4 inch high-density cushioned eco TPE mat in soft pastel blush color with alignment guide lines.',
    fullReview: `Elevate your home workout space with this ultra-cushioned, odorless TPE yoga and pilates mat. Specially designed with subtle laser-engraved alignment lines, it helps maintain proper posture during yoga flows and core pilates exercises.

The double-sided non-slip texture grips hardwood floors and carpet firmly without sliding, giving you total stability during lunges and planks.`,
    pros: [
      '6mm high-density cushioning protects knees and joints',
      'Eco-friendly non-toxic TPE material, completely PVC-free',
      'Laser engraved alignment lines for posture accuracy',
      'Includes matching cotton carry strap'
    ],
    cons: [
      'Slightly wider to store than thin travel mats',
      'Wipe down with damp cloth after hot yoga sessions'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006678901.html',
    isTrending: false,
    isFeatured: false,
    isChoice: true,
    tags: ['Fitness', 'Pilates', 'Yoga', 'Blush Pink', 'Home Workout'],
    specifications: {
      'Dimensions': '72" L x 24" W x 1/4" Thick',
      'Weight': '2.2 lbs',
      'Material': 'Biodegradable TPE'
    },
    updatedDate: '2026-07-15'
  },
  {
    id: 'prod-7',
    title: 'Magnetic 3-in-1 Wireless Charging Station for Desk & Nightstand',
    slug: 'magnetic-3-in-1-wireless-charging-station',
    category: 'Lifestyle Gadgets',
    categorySlug: 'lifestyle-gadgets',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    price: '$39.99',
    originalPrice: '$52.00',
    rating: 4.8,
    reviewCount: 3100,
    shortDescription: 'Sleek soft-touch folding magnetic wireless charger for iPhone, Apple Watch, and AirPods with subtle LED status dimming.',
    fullReview: `Eliminate messy cords on your nightstand or work desk. This minimalist 3-in-1 charging tree holds your smartphone magnetically in portrait or landscape mode while powering your smartwatch and wireless earbud case simultaneously.

Constructed from premium soft-touch weighted aluminum alloy with built-in thermal protection sensors so your devices charge safely without overheating overnight.`,
    pros: [
      'Strong MagSafe-compatible magnets keep phone firmly elevated',
      'Folds flat for effortless travel & hotel stays',
      'Sleep-friendly dimmed indicator light auto-shuts off after 20s',
      'Includes 20W Fast Charge USB-C wall adapter'
    ],
    cons: [
      'Requires magnetic phone case or slim bare phone for best grip',
      'White soft-touch finish should be wiped occasionally'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006789012.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Gadgets', 'Tech', 'Desk Setup', 'Wireless Charger', 'Minimalist Tech'],
    specifications: {
      'Compatibility': 'iPhone 12-16 Series, Apple Watch, AirPods / Qi Earbuds',
      'Max Output': '15W Fast Wireless',
      'Material': 'Anodized Aluminum + Soft-Touch Silicone'
    },
    updatedDate: '2026-07-23'
  },
  {
    id: 'prod-8',
    title: 'Luxury Scented Soy Candle in Handmade Ceramic Jar (Sandalwood & Coconut)',
    slug: 'luxury-scented-soy-candle-sandalwood-coconut',
    category: 'Gift Ideas',
    categorySlug: 'gift-ideas',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    price: '$26.00',
    originalPrice: '$34.00',
    rating: 4.9,
    reviewCount: 940,
    shortDescription: '100% natural soy wax candle poured into a reusable matte ceramic vessel with crackling wooden wick. 65-hour clean burn.',
    fullReview: `A signature home fragrance that feels like a stay at a five-star luxury coastal resort. Notes of warm creamy sandalwood, sun-bleached coconut husk, and soft vanilla bean create an inviting atmosphere without feeling overwhelming.

The natural FSC-certified wooden wick produces a soothing subtle crackle sound, while the matte ceramic jar easily repurposes into a succulent planter or desk pen holder once finished.`,
    pros: [
      '100% USA grown soy wax, paraben & phthalate free',
      'Crackling wooden wick for cozy ambient sound',
      'Reusable handmade ceramic container',
      'Impressive 65-hour burn time with zero soot smoke'
    ],
    cons: [
      'Trim wooden wick to 1/4 inch before each lighting for clean burn',
      'Popular scent frequently sells out before holidays'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006890123.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Gift Ideas', 'Candles', 'Home Fragrance', 'Cozy Living', 'Self-Care'],
    specifications: {
      'Wax Type': '100% Pure Soy Wax',
      'Wick': 'Natural FSC Certified Wood',
      'Burn Time': '65+ Hours',
      'Weight': '10 oz (283g)'
    },
    updatedDate: '2026-07-20'
  },
  {
    id: 'prod-9',
    title: 'Self-Cleaning Smart UV-C Insulated Stainless Water Bottle',
    slug: 'self-cleaning-smart-uv-c-water-bottle',
    category: 'Trending AliExpress Finds',
    categorySlug: 'trending-finds',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    price: '$49.99',
    originalPrice: '$65.00',
    rating: 4.8,
    reviewCount: 2840,
    shortDescription: 'Rechargeable UV-C LED cap eliminates 99.9% of odor-causing bacteria every 2 hours while keeping drinks cold for 24 hours.',
    fullReview: `Say goodbye to mysterious bottle odors forever. This double-wall vacuum insulated flask features a built-in UV-C cap light that automatically activates a 60-second purification cycle every 2 hours, breaking down bio-contaminants and keeping water tasting spring-fresh.

Whether taking it to pilates class, traveling through airports, or sitting at your office desk, it keeps beverages ice-cold for 24 hours or steaming hot for 12 hours.`,
    pros: [
      'UV-C light kills 99.9% of bacteria inside bottle & cap',
      'USB magnetic quick-charging cap lasts up to 30 days per charge',
      'BPA-free 18/8 food grade stainless steel body',
      'Sleek powder-coated matte finish in oat cream'
    ],
    cons: [
      'Do not wash cap in dishwasher (wipe clean)',
      'Slightly heavier than plastic workout bottles'
    ],
    aliexpressUrl: 'https://www.aliexpress.com/item/1005006901234.html',
    isTrending: true,
    isFeatured: true,
    isChoice: true,
    tags: ['Trending', 'Water Bottle', 'Wellness', 'Tech', 'AliExpress Viral'],
    specifications: {
      'Capacity': '20 oz (600 ml)',
      'Insulation': '24 hrs Cold / 12 hrs Hot',
      'Battery Life': '1 Month per 2.5hr charge'
    },
    updatedDate: '2026-07-25'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '20 Viral AliExpress Finds You’ll Absolutely Fall in Love With',
    slug: '20-viral-aliexpress-finds-youll-love',
    category: 'Trending AliExpress Finds',
    excerpt: 'From aesthetic ribbed glassware to smart desk organization, these 20 viral AliExpress Choice products are worth every single penny.',
    content: `Finding true gems amongst millions of AliExpress listings can feel like searching for a needle in a haystack. That's why our editorial team spends dozens of hours ordering, unboxing, and testing the latest viral home decor, beauty ritual essentials, and lifestyle gadgets.

Today, we're sharing our ultimate 2026 breakdown of the absolute best AliExpress Choice finds that deliver on style, quality, and everyday functional joy.

### 1. Ribbed Glassware with Bamboo Lids
Nothing makes your morning iced coffee or golden matcha latte look more luxurious than an origami fluted glass set. High borosilicate glass means you can pour hot espresso directly over ice without worry.

### 2. Nordic Ceramic Donut Vases
Ditch generic glass vases for matte terracotta ceramics. Paired with fluffy neutral pampas grass or eucalyptus, these act as instant sculptural focal points for coffee tables and entryway credenzas.

### 3. Magnetic 3-in-1 Foldable Charging Stand
Cable clutter is officially out. A soft-touch magnetic stand elevates your phone into standby display mode while simultaneously charging your smartwatch and earbud case overnight.

### 4. Skincare Ice Rollers & Gua Sha
Start every morning with lymphatic de-puffing. Stored in your mini vanity fridge, genuine rose quartz crystal rollers soothe tired eyes and sculpt the cheekbones in under 3 minutes.

---

### How to Shop Smarter on AliExpress
1. **Always check buyer photo reviews**: Real customer photos reveal actual color, texture, and packaging quality.
2. **Filter by AliExpress Choice & SuperDeals**: Look for Choice badges for fast direct shipping and guaranteed hassle-free returns.
3. **Save your favorite items to GlowNest wishlists**: Track discount vouchers and anniversary flash sale price drops.`,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Evelyn St. Claire',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Editor in Chief & Home Styling Curator'
    },
    publishedAt: '2026-07-24',
    readTime: '6 min read',
    relatedProductIds: ['prod-1', 'prod-5', 'prod-7'],
    pinterestPinImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-2',
    title: 'The Ultimate Home Organization Guide for Minimalist Aesthetics',
    slug: 'best-home-organization-products-minimalist-guide',
    category: 'Home Organization',
    excerpt: 'Transform messy pantries, cluttered vanities, and chaotic closets into soothing, pristine spaces with these top-rated clear acrylic and bamboo organizers.',
    content: `When your living space is organized, your mind immediately feels lighter. Creating a calm home environment doesn't require expensive full-remodel renovations—often, smart organization systems are all it takes.

### 1. Clear Acrylic Vanity Drawers
Keeping serums, lip oils, and makeup palettes visible yet dust-free makes morning routines seamless. Opt for heavy-duty acrylic with removable non-slip liners.

### 2. Natural Bamboo Pantry Bins & Spice Racks
Ditch mismatched cardboard packaging. Decanting dry grains, pasta, and spices into matching clear glass jars with airtight bamboo covers creates that coveted custom pantry look.

### 3. Under-Sink Pullout Shelving
Utilize vertical space around plumbing pipes with two-tier sliding steel baskets. Store extra cleaning supplies, sponges, and microfiber cloths systematically.`,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sophia Laurent',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      role: 'Interior Designer & Organization Expert'
    },
    publishedAt: '2026-07-20',
    readTime: '5 min read',
    relatedProductIds: ['prod-3'],
    pinterestPinImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'Top Beauty & Skincare Ritual Essentials Under $30',
    slug: 'top-beauty-skincare-essentials-under-30',
    category: 'Beauty & Self-Care',
    excerpt: 'High-performing skincare doesn’t need a designer price tag. Discover dermatologist-loved, glow-boosting AliExpress beauty finds that cost less than $30.',
    content: `Achieving radiant, healthy skin comes down to consistency and effective ingredient formulations. You don't need to spend hundreds at high-end department stores when AliExpress carries dermatologist-tested, clean beauty formulas.

### Highlighted Budget Beauty Holy Grails:
- **Rose Quartz Facial Ice Rollers**: Soothes inflammation, decreases fluid retention under eyes, and facilitates better absorption of facial oils.
- **Squalane & Peptide Glow Oils**: Lightweight moisture barrier protection that seals in moisture without clogging pores.
- **Microfiber Hair Towel Wraps**: Reduces friction breakage and dries hair 50% faster than harsh terrycloth towels.`,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Camilla Vance',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Beauty Editor & Holistic Esthetician'
    },
    publishedAt: '2026-07-18',
    readTime: '4 min read',
    relatedProductIds: ['prod-2'],
    pinterestPinImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-4',
    title: '5 Must-Have Kitchen Gadgets That Save Hours Every Week',
    slug: 'must-have-kitchen-gadgets-saving-hours',
    category: 'Kitchen Essentials',
    excerpt: 'Streamline meal prep and elevate your coffee station with these functional, beautifully designed kitchen essentials.',
    content: `Kitchen tools should be as beautiful as they are functional. Whether you love cooking elaborate weekend dinners or simply want a smooth morning coffee routine, these carefully selected tools shave time off kitchen prep.

### 1. Electric Milk Frother & Matcha Mixer
Create cafe-quality microfoam in 15 seconds. High torque whisper-quiet motors blend collagen powders, matcha, and oat milk smoothly.

### 2. Borosilicate Ribbed Tumblers
Durable glassware designed for both scalding espresso and iced mocktails. High temperature tolerance makes them dishwasher friendly.

### 3. Automatic Gravity Salt & Pepper Grinders
One-handed grinding while searing meats or dressing salads. Built-in LED lights guide precise seasoning onto every dish.`,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Evelyn St. Claire',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Editor in Chief'
    },
    publishedAt: '2026-07-15',
    readTime: '5 min read',
    relatedProductIds: ['prod-5'],
    pinterestPinImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-5',
    title: 'Daily Wellness & Mindfulness Products Worth Buying',
    slug: 'wellness-mindfulness-products-worth-buying',
    category: 'Health & Wellness',
    excerpt: 'Invest in your daily peace with aromatherapy ceramic diffusers, UV-C water bottles, and supportive pilates mats.',
    content: `True wellness starts with tiny daily rituals. Creating an inviting morning and evening environment encourages consistent hydration, restorative sleep, and movement.

### Key Wellness Investments:
1. **Self-Cleaning Smart UV Water Bottle**: Pure tasting water wherever you travel.
2. **Ultrasonic Ceramic Oil Diffusers**: High quality cold mist diffusion paired with soft amber candlelight illumination.
3. **Cushioned TPE Pilates Mats**: 6mm density to safeguard joints during daily stretch sessions.`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sophia Laurent',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      role: 'Wellness & Lifestyle Writer'
    },
    publishedAt: '2026-07-12',
    readTime: '6 min read',
    relatedProductIds: ['prod-4', 'prod-6', 'prod-9'],
    pinterestPinImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Carefully Curated Products',
    description: 'We test and evaluate thousands of items so you only discover products that deliver true quality, durability, and aesthetic charm.',
    iconName: 'Sparkles'
  },
  {
    title: 'Trending AliExpress Finds',
    description: 'Stay ahead of viral TikTok and Pinterest lifestyle trends without digging through endless pages of low-quality listings on AliExpress.',
    iconName: 'Flame'
  },
  {
    title: 'Honest Recommendations',
    description: 'Unbiased pros and cons breakdowns on every item, transparent AliExpress Portals affiliate disclosures, and real-world durability tests.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Affordable Everyday Essentials',
    description: 'Luxury aesthetics shouldn’t break the bank. We prioritize accessible, high-value finds that elevate daily living effortlessly.',
    iconName: 'Award'
  }
];
