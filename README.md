# Homebiro Solution Landing Page

A stunning, motion-rich landing page for Homebiro Solution - Your Trusted Tenant Concierge Service.

## Features

- ✨ Beautiful blue-themed design with smooth animations
- 📱 Fully responsive across all devices
- 🎨 Modern UI with Framer Motion animations
- ⚡ Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎯 SEO optimized
- 🚀 Fast performance with optimized assets

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Bricolage Grotesque & Inter

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
homebiro-landing/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── WhyChooseUs.tsx  # Comparison section
│   ├── Features.tsx     # Features & services
│   ├── Testimonials.tsx # Client testimonials
│   ├── WorkWithUs.tsx   # Career opportunities
│   └── Footer.tsx       # Footer with links
├── public/
│   └── images/          # Image assets (add your images here)
└── package.json
```

## Customization

### Images

Replace placeholder content with your actual images:

1. **Hero Section**: Add your model/rollup stand image in `components/Hero.tsx`
2. **Comparison Chart**: Add your comparison image in `components/WhyChooseUs.tsx`
3. **Book Cover**: Add your legal guide book cover in `components/Features.tsx`

Simply upload images to `/public/images/` and update the import paths.

### Colors

The blue theme can be customized in `tailwind.config.js`:

```javascript
colors: {
  homebiro: {
    blue: '#1e40af',
    light: '#3b82f6',
    dark: '#1e3a8a',
    accent: '#60a5fa',
  }
}
```

### Content

All text content can be edited directly in the component files:
- Hero section: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Testimonials: `components/Testimonials.tsx`
- etc.

## Key Sections

1. **Header**: Sticky navigation with smooth scroll links
2. **Hero**: Eye-catching introduction with CTA buttons
3. **Why Choose Us**: Comparison table between traditional market and Homebiro
4. **Features**: Grid of services with icons and descriptions
5. **Testimonials**: Client reviews with ratings
6. **Work With Us**: Career opportunities section
7. **Footer**: Links, app download buttons, and social media

## Animation Features

- Smooth fade-in and slide animations on scroll
- Hover effects on cards and buttons
- Floating elements and parallax effects
- Staggered animations for list items
- Interactive button states

## Performance

- Optimized images with Next.js Image component
- CSS animations over JavaScript where possible
- Lazy loading for off-screen content
- Minimal bundle size with tree-shaking

## Support

For support, email support@homebiro.com

## License

© 2026 Homebiro Solution Ltd. All rights reserved.
