# StriveGo Official Website

A modern, futuristic website built with Next.js 14, React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Yup
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── products/          # Products listing & detail pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── home/              # Home page components
│   ├── about/             # About page components
│   ├── products/          # Products page components
│   ├── contact/           # Contact page components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utilities & constants
│   ├── utils.ts           # Helper functions
│   ├── types.ts           # TypeScript types
│   └── constants.ts       # App constants
├── public/                # Static assets
└── styles/                # Global styles
```

## 🎨 Design System

### Colors
- **Quantum Cyan**: `#00C2DA` - Primary accent
- **Deep Sapphire**: `#0A2463` - Primary dark
- **Royal Purple**: `#8B5CF6` - Secondary accent
- **Neon Turquoise**: `#00FFE5` - Highlight

### Typography
- **Headings**: Space Grotesk (Display font)
- **Body**: Poppins (Sans-serif)

## 📝 Features Implemented

✅ Modern Home Page with Hero, Trusted Brands, What We Do, Featured Solutions
✅ About Page with Mission, Vision, Values, Team, Testimonials
✅ Products Page with filtering and dynamic routes
✅ Contact Page with form, map, social links
✅ Responsive design (mobile-first)
✅ SEO optimization
✅ Animations with Framer Motion
✅ Glassmorphism effects
✅ Smooth scrolling

## 🚧 Components Still Needed

The following components need to be created:

1. **About Page Components**:
   - `components/about/MissionVision.tsx`
   - `components/about/CoreValues.tsx`
   - `components/about/TeamSection.tsx`
   - `components/about/Testimonials.tsx`

2. **Products Page**:
   - `app/products/page.tsx`
   - `app/products/[id]/page.tsx`
   - `components/products/ProductFilter.tsx`
   - `components/products/ProductCard.tsx`
   - `components/products/ProductDetail.tsx`

3. **Contact Page**:
   - `app/contact/page.tsx`
   - `components/contact/ContactForm.tsx`
   - `components/contact/MapSection.tsx`
   - `components/contact/Newsletter.tsx`

4. **Integration Files**:
   - `lib/firebase.ts` - Firebase configuration
   - `lib/emailjs.ts` - EmailJS configuration

## 🎯 Next Steps

1. Complete remaining components following the established patterns
2. Set up Firebase/EmailJS integrations
3. Add Google Maps integration
4. Configure Google Analytics
5. Add image optimization
6. Test all pages and functionality
7. Deploy to Vercel

## 📄 License

© 2025 StriveGo. All rights reserved.

