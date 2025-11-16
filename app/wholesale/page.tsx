import Link from 'next/link';
import { priceTiers } from '@/lib/products';

export default function WholesalePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Wholesale Program</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of retailers and stylists who trust DK Wholesale for their wig inventory
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose DK Wholesale?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                <p className="mt-1 text-gray-600">
                  Save up to 50% with our tiered wholesale pricing structure
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                <p className="mt-1 text-gray-600">
                  100% human hair wigs with superior construction and natural appearance
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
                <p className="mt-1 text-gray-600">
                  Quick processing and reliable delivery to keep your inventory stocked
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Low Minimums</h3>
                <p className="mt-1 text-gray-600">
                  Start with as few as 2-6 units depending on the product
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                <p className="mt-1 text-gray-600">
                  Every wig is inspected before shipping to ensure customer satisfaction
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dedicated Support</h3>
                <p className="mt-1 text-gray-600">
                  Our team is here to help with product selection and order questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Pricing Structure</h2>
          <p className="mt-2 text-gray-600">
            The more you order, the more you save. Our tiered pricing system rewards larger orders:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {priceTiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 text-center"
              >
                <div className="text-sm font-medium text-purple-900">
                  {tier.minQuantity}
                  {tier.maxQuantity ? `-${tier.maxQuantity}` : '+'} Units
                </div>
                <div className="mt-2 text-3xl font-bold text-purple-600">
                  {tier.discount}%
                </div>
                <div className="text-sm text-purple-800">OFF</div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How to Get Started</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Browse Our Catalog</h3>
                <p className="mt-1 text-gray-600">
                  Explore our wide selection of premium wigs and choose products for your business
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Us</h3>
                <p className="mt-1 text-gray-600">
                  Reach out to set up your wholesale account and discuss your business needs
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Place Your Order</h3>
                <p className="mt-1 text-gray-600">
                  Submit your first order and take advantage of our wholesale pricing
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Grow Your Business</h3>
                <p className="mt-1 text-gray-600">
                  Enjoy competitive pricing, quality products, and excellent support as you grow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold">Ready to Start?</h2>
          <p className="mt-2 text-purple-100">
            Contact us today to set up your wholesale account and start saving
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
