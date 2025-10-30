# Public Folder Structure Setup Guide

This guide explains the organized folder structure for all images and assets in the `public` folder.

## 📁 Folder Structure

```
public/
├── images/
│   ├── logo/
│   │   └── logo.jpeg
│   ├── clients/
│   │   ├── rana.jpg
│   │   ├── yahya.jpg
│   │   ├── bulkstream.jpg
│   │   ├── grainbulk.jpg
│   │   ├── epza.jpg
│   │   └── lastybusiness.jpg
│   ├── team/
│   │   ├── nelson-frank.jpg (currently: prof.jpg)
│   │   ├── laura-nyaaga.jpg (currently: Laura.jpg)
│   │   ├── fidel-ochieng.jpg (currently: fidel.jpg)
│   │   └── caleb-kiptoo.jpg (currently: kiptoo.jpg)
│   ├── products/
│   │   ├── smarthire.jpg
│   │   ├── b2b-sales.jpg (currently: B2Bsales.jpg)
│   │   ├── cybersec.jpg
│   │   ├── mental-health.jpg
│   │   ├── edutech.png
│   │   └── gigaform.jpg
│   ├── testimonials/
│   │   ├── john.jpg
│   │   ├── mary.jpg
│   │   └── paul.jpg
│   └── about/
│       └── vision.png
├── videos/
│   └── herovideo.mp4
└── favicon.ico (optional)
```

## 🔄 Migration Steps

1. **Create the folder structure:**
   ```bash
   mkdir -p public/images/{logo,clients,team,products,testimonials,about}
   mkdir -p public/videos
   ```

2. **Move existing images:**

   **Logo:**
   ```bash
   mv logo.jpeg public/images/logo/logo.jpeg
   ```

   **Clients (Trusted Brands):**
   ```bash
   mv rana.jpg public/images/clients/rana.jpg
   mv yahya.jpg public/images/clients/yahya.jpg
   mv bulkstream.jpg public/images/clients/bulkstream.jpg
   mv grainbulk.jpg public/images/clients/grainbulk.jpg
   mv epza.jpg public/images/clients/epza.jpg
   mv lastybusiness.jpg public/images/clients/lastybusiness.jpg
   ```

   **Team:**
   ```bash
   mv prof.jpg public/images/team/nelson-frank.jpg
   mv Laura.jpg public/images/team/laura-nyaaga.jpg
   mv fidel.jpg public/images/team/fidel-ochieng.jpg
   mv kiptoo.jpg public/images/team/caleb-kiptoo.jpg
   ```

   **Products:**
   ```bash
   mv B2Bsales.jpg public/images/products/b2b-sales.jpg
   mv cybersec.jpg public/images/products/cybersec.jpg
   mv edutech.png public/images/products/edutech.png
   # Note: smarthire.jpg, mental-health.jpg, and gigaform.jpg may need to be added if they don't exist
   ```

   **Testimonials:**
   ```bash
   mv john.jpg public/images/testimonials/john.jpg
   # Note: mary.jpg and paul.jpg may need to be added if they don't exist
   ```

   **About:**
   ```bash
   mv vision.png public/images/about/vision.png
   ```

   **Videos:**
   ```bash
   mv herovideo.mp4 public/videos/herovideo.mp4
   ```

3. **Update layout.tsx for logo:**
   The logo path in `app/layout.tsx` metadata should be:
   ```typescript
   images: [
     {
       url: '/images/logo/logo.jpeg',
       // ...
     },
   ],
   ```

## 📝 Notes

- All image paths in `lib/constants.ts` have been updated to use the new structure
- The paths start with `/images/` which maps to `public/images/` in Next.js
- Image filenames have been standardized (lowercase, kebab-case)
- If any product/testimonial images are missing, you'll need to add placeholder images or create them

## ✅ Verification

After moving files, verify all images load correctly by:
1. Running `npm run dev`
2. Checking each page that uses images
3. Ensuring no broken image links in the browser console

## 🎨 Image Optimization Tips

For better performance, consider:
- Converting all images to WebP format
- Compressing images before adding to public folder
- Using Next.js `Image` component for automatic optimization
- Adding proper `alt` text for accessibility (already in constants)

