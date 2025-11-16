import Link from 'next/link';

export default function CartPage() {
  // In a real app, this would use state management (Context, Redux, etc.)
  const cartItems: any[] = [];

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="mt-12 rounded-lg bg-white p-12 text-center shadow-sm">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-600">
              Start adding some premium wigs to your wholesale order!
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                {/* Cart items would be rendered here */}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                {/* Order summary would be rendered here */}
              </div>
            </div>
          </div>
        )}

        {/* Wholesale Info Banner */}
        <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Want Better Pricing?</h2>
          <p className="mt-2 text-purple-100">
            Order more units to unlock additional discounts with our tiered pricing system
          </p>
          <Link
            href="/wholesale"
            className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Learn More About Wholesale
          </Link>
        </div>
      </div>
    </div>
  );
}
