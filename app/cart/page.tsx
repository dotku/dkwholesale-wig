'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { calculatePrice } from '@/lib/products';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

        {items.length === 0 ? (
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
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items ({items.length})</h2>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear your cart?')) {
                        clearCart();
                      }
                    }}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => {
                    const unitPrice = calculatePrice(item.product.wholesalePrice, item.quantity);
                    const totalPrice = unitPrice * item.quantity;

                    return (
                      <div key={item.product.id} className="flex gap-4 border-b border-gray-200 pb-4 last:border-0">
                        {/* Product Image */}
                        <Link href={`/products/${item.product.id}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </Link>

                        {/* Product Info */}
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <Link href={`/products/${item.product.id}`}>
                                <h3 className="text-base font-semibold text-gray-900 hover:text-purple-600">
                                  {item.product.name}
                                </h3>
                              </Link>
                              <p className="mt-1 text-sm text-gray-600">
                                {item.product.length} • {item.product.color}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-600"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="rounded-lg border border-gray-300 p-1 hover:bg-gray-100 disabled:opacity-50"
                                disabled={item.quantity <= item.product.minOrderQuantity}
                              >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="rounded-lg border border-gray-300 p-1 hover:bg-gray-100 disabled:opacity-50"
                                disabled={item.quantity >= item.product.stockQuantity}
                              >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <p className="text-base font-bold text-purple-600">${totalPrice.toFixed(2)}</p>
                              <p className="text-xs text-gray-500">${unitPrice.toFixed(2)} each</p>
                            </div>
                          </div>

                          {/* Min order notice */}
                          {item.quantity < item.product.minOrderQuantity && (
                            <p className="mt-2 text-xs text-orange-600">
                              Min order: {item.product.minOrderQuantity} units
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow-sm sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 border-b border-gray-200 pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-medium text-gray-900">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-base">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-purple-600 text-xl">${getTotalPrice().toFixed(2)}</span>
                </div>

                <a
                  href={`https://wa.me/8618718688532?text=${encodeURIComponent(
                    `Hi, I would like to place an order:\n\n` +
                    items.map(item => `${item.product.name}\nQuantity: ${item.quantity}\nPrice: $${(calculatePrice(item.product.wholesalePrice, item.quantity) * item.quantity).toFixed(2)}`).join('\n\n') +
                    `\n\nTotal: $${getTotalPrice().toFixed(2)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact via WhatsApp to Checkout
                </a>

                <div className="mt-3 rounded-lg bg-green-50 p-3 text-center">
                  <p className="text-sm font-semibold text-green-900">WhatsApp: +86 187 1868 8532</p>
                  <p className="mt-1 text-xs text-green-700">Click button above to send order details</p>
                </div>

                <Link
                  href="/products"
                  className="mt-3 block w-full rounded-full border-2 border-purple-600 px-8 py-3 text-center text-base font-semibold text-purple-600 hover:bg-purple-50"
                >
                  Continue Shopping
                </Link>

                {/* Savings Notice */}
                <div className="mt-6 rounded-lg bg-green-50 p-4">
                  <h3 className="text-sm font-semibold text-green-900">Wholesale Savings</h3>
                  <p className="mt-1 text-xs text-green-700">
                    You're getting wholesale prices! Save more by adding more items.
                  </p>
                </div>
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
