# Deployment Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## ✅ Completed Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript strict mode
- ✅ TailwindCSS with custom design system
- ✅ Framer Motion animations
- ✅ Responsive design (mobile-first)
- ✅ SEO optimization (meta tags, sitemap, robots.txt)
- ✅ Google Analytics integration
- ✅ Contact form with validation
- ✅ Newsletter subscription
- ✅ Product filtering
- ✅ Dynamic product pages
- ✅ Image optimization ready

## 🔧 Still To Configure

1. **Firebase Setup**: Get credentials from Firebase Console
2. **EmailJS Setup**: Configure email service
3. **Google Maps**: Get API key from Google Cloud Console
4. **Google Analytics**: Add your GA4 Measurement ID
5. **Missing Images**: Add placeholder images for:
   - `/public/images/products/smarthire.jpg`
   - `/public/images/products/mental-health.jpg`
   - `/public/images/products/gigaform.jpg`
   - `/public/images/testimonials/mary.jpg`
   - `/public/images/testimonials/paul.jpg`

## 📝 Next Steps

1. Configure integrations (Firebase, EmailJS, Maps)
2. Add missing product/testimonial images
3. Test all forms and interactions
4. Optimize images (convert to WebP)
5. Run performance audit
6. Deploy!

