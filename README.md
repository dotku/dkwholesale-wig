# DK Wholesale Wigs

A modern e-commerce platform for wholesale wig sales, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse premium human hair wigs with detailed product information
- **Wholesale Pricing**: Tiered pricing system with discounts for bulk orders
- **Category Filtering**: Filter products by category, style, and sort by price
- **Product Details**: Comprehensive product pages with features, specifications, and pricing calculator
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Clean, professional design with gradient accents and smooth interactions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Project Structure

```
dkwholesale-wig/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage with hero and featured products
│   ├── products/          # Product catalog and detail pages
│   ├── wholesale/         # Wholesale program information
│   ├── contact/           # Contact form
│   └── cart/              # Shopping cart (placeholder)
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with links
│   └── ProductCard.tsx   # Product display card
├── lib/                   # Utility functions and data
│   └── products.ts       # Sample product data and helpers
└── types/                 # TypeScript type definitions
    └── product.ts        # Product-related types
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

- **Home** (`/`): Hero section, features, and featured products
- **Products** (`/products`): Full catalog with filtering and sorting
- **Product Detail** (`/products/[id]`): Individual product page with pricing calculator
- **Wholesale** (`/wholesale`): Information about the wholesale program
- **Contact** (`/contact`): Contact form for inquiries
- **Cart** (`/cart`): Shopping cart (currently placeholder)

## Wholesale Pricing Tiers

- 1-4 units: 0% discount
- 5-9 units: 10% discount
- 10-19 units: 15% discount
- 20+ units: 25% discount

## Future Enhancements

- Shopping cart functionality with state management
- User authentication and account management
- Order history and tracking
- Admin dashboard for product management
- Payment integration
- Email notifications
- Product reviews and ratings
- Wishlist functionality

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
