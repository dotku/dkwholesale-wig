export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About DK Wholesale</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted partner for premium quality wigs at wholesale prices
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              Founded in 2020, DK Wholesale has been committed to providing retailers and stylists with
              the highest quality wigs at competitive wholesale prices. We understand the needs of
              businesses in the beauty industry and strive to be your reliable partner for growth.
            </p>
            <p>
              Our journey began with a simple vision: to make premium human hair wigs accessible to
              businesses of all sizes. Today, we serve hundreds of retailers and stylists across the
              country, offering a diverse range of products from lace fronts to full lace wigs.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To empower beauty professionals with premium quality products and exceptional service,
              enabling them to grow their businesses and serve their customers better.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Our Values</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Quality First - Only premium products</li>
              <li>• Fair Pricing - Competitive wholesale rates</li>
              <li>• Reliability - Consistent stock and delivery</li>
              <li>• Support - Dedicated customer service</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose DK Wholesale?</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-purple-600">Premium Quality</h3>
              <p className="mt-2 text-sm text-gray-600">
                100% human hair wigs sourced from trusted suppliers, rigorously tested for quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Wholesale Pricing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tiered pricing structure that rewards larger orders with better discounts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Low Minimums</h3>
              <p className="mt-2 text-sm text-gray-600">
                Start with as few as 2-6 units depending on the product, perfect for small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Fast Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">
                Quick processing and reliable shipping to get your products when you need them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Wide Selection</h3>
              <p className="mt-2 text-sm text-gray-600">
                From lace fronts to closures, various lengths, colors, and styles to meet all needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Dedicated Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                Our team is here to help with product selection, ordering, and any questions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to Partner With Us?</h2>
          <p className="mt-2 text-purple-100">
            Join hundreds of satisfied retailers and stylists nationwide
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 hover:bg-gray-100"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
