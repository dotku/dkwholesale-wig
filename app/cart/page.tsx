'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { calculatePrice } from '@/lib/products';
import { CreateOrderInput, OrderItem } from '@/lib/types/order';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    notes: '',
  });

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      setError('Please provide your name and email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Calculate order totals
      const subtotal = getTotalPrice();
      const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

      // Prepare order items
      const orderItems: OrderItem[] = items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: calculatePrice(item.product.wholesalePrice, item.quantity),
        subtotal: calculatePrice(item.product.wholesalePrice, item.quantity) * item.quantity,
      }));

      // Create order payload
      const orderData: CreateOrderInput = {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone || undefined,
        customer_whatsapp: '+8618718688532', // WhatsApp contact number
        business_name: customerInfo.businessName || undefined,
        items: orderItems,
        subtotal,
        discount_amount: 0, // Can calculate discount if needed
        total_amount: subtotal,
        total_quantity: totalQuantity,
        notes: customerInfo.notes || undefined,
      };

      // Submit order to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create order');
      }

      // Success! Create WhatsApp message with order number
      const whatsappMessage = `Hi, I would like to confirm my order:\n\n` +
        `Order Number: ${result.order.order_number}\n` +
        `Customer: ${customerInfo.name}\n` +
        `Email: ${customerInfo.email}\n\n` +
        `Order Details:\n` +
        items.map(item =>
          `${item.product.name}\n` +
          `Quantity: ${item.quantity}\n` +
          `Price: $${(calculatePrice(item.product.wholesalePrice, item.quantity) * item.quantity).toFixed(2)}`
        ).join('\n\n') +
        `\n\nTotal: $${subtotal.toFixed(2)}` +
        (customerInfo.notes ? `\n\nNotes: ${customerInfo.notes}` : '');

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/8618718688532?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Clear cart after successful order
      clearCart();
      setShowCheckoutForm(false);
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        notes: '',
      });

    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to process order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

                {/* Error Message */}
                {error && (
                  <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
                    {error}
                  </div>
                )}

                {/* Checkout Form or Button */}
                {!showCheckoutForm ? (
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={customerInfo.businessName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, businessName: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                        Order Notes
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Any special requests or notes..."
                      />
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Checkout via WhatsApp
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setShowCheckoutForm(false);
                        setError(null);
                      }}
                      className="w-full rounded-full border-2 border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <div className="mt-3 rounded-lg bg-green-50 p-3 text-center">
                  <p className="text-sm font-semibold text-green-900">WhatsApp: +86 187 1868 8532</p>
                  <p className="mt-1 text-xs text-green-700">
                    {showCheckoutForm ? 'Complete the form to send your order' : 'Click checkout to get started'}
                  </p>
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
