# Public Folder Structure

All static assets are organized in the `public` folder. In Next.js, files in the `public` folder are served at the root path `/`.

## 📁 Current Structure

```
public/
├── images/
│   ├── logo/
│   │   └── logo.jpeg                    → Company logo
│   ├── clients/
│   │   ├── rana.jpg                     → Rana client logo
│   │   ├── yahya.jpg                    → Yahya client logo
│   │   ├── bulkstream.jpg               → Bulkstream client logo
│   │   ├── grainbulk.jpg                → Grainbulk client logo
│   │   ├── epza.jpg                     → EPZA client logo
│   │   └── lastybusiness.jpg            → Lasty Business client logo
│   ├── team/
│   │   ├── nelson-frank.jpg             → Nelson Frank (Junior Software Engineer)
│   │   ├── laura-nyaaga.jpg             → Laura Nyaaga (Software Developer)
│   │   ├── fidel-ochieng.jpg            → Fidel Ochieng (Lead Web Designer)
│   │   └── caleb-kiptoo.jpg             → Caleb Kiptoo (Lead Developer)
│   ├── products/
│   │   ├── smarthire.jpg                → SmartHire product (placeholder - needs to be added)
│   │   ├── b2b-sales.jpg                → B2B Sales Automation product
│   │   ├── cybersec.jpg                 → CyberSec AI Agent product
│   │   ├── mental-health.jpg            → Mental Health Companion (placeholder - needs to be added)
│   │   ├── edutech.png                  → EdTech Platform product
│   │   └── gigaform.jpg                 → GigaForm Marketplace (placeholder - needs to be added)
│   ├── testimonials/
│   │   ├── john.jpg                     → John Hill testimonial
│   │   ├── mary.jpg                     → Mary Achieng testimonial (placeholder - needs to be added)
│   │   └── paul.jpg                     → Paul Otieno testimonial (placeholder - needs to be added)
│   └── about/
│       └── vision.png                   → Vision image for about page
└── videos/
    └── herovideo.mp4                    → Hero section background video
```

## 🔗 Image References

All images are referenced in `lib/constants.ts` using paths starting with `/images/`:
- Logo: `/images/logo/logo.jpeg`
- Clients: `/images/clients/[name].jpg`
- Team: `/images/team/[member-name].jpg`
- Products: `/images/products/[product-name].[ext]`
- Testimonials: `/images/testimonials/[name].jpg`
- About: `/images/about/vision.png`
- Videos: `/videos/herovideo.mp4`

## 📝 Missing Images

The following images are referenced but need to be added:
- `/images/products/smarthire.jpg`
- `/images/products/mental-health.jpg`
- `/images/products/gigaform.jpg`
- `/images/testimonials/mary.jpg`
- `/images/testimonials/paul.jpg`

## ✅ Next Steps

1. Add placeholder images for missing products/testimonials
2. Optimize all images (consider WebP format for better performance)
3. Use Next.js `Image` component for automatic optimization
4. Ensure all images have proper alt text (already configured in constants)

