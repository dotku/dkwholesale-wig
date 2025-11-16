'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Order, OrderItem } from '@/lib/types/order';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOrder(null);

    try {
      const response = await fetch(`/api/orders/track/${encodeURIComponent(orderNumber)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to find order');
      }

      setOrder(data.order);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to track order');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-purple-100 text-purple-800';
      case 'shipped':
        return 'bg-green-100 text-green-800';
      case 'delivered':
        return 'bg-green-200 text-green-900';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return '⏳';
      case 'confirmed':
        return '✅';
      case 'processing':
        return '⚙️';
      case 'shipped':
        return '🚚';
      case 'delivered':
        return '📦';
      case 'cancelled':
        return '❌';
      default:
        return '📋';
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Track Your Order</h1>
          <p className="mt-4 text-lg text-gray-600">
            Enter your order number to see the status of your order
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <form onSubmit={handleTrackOrder} className="space-y-4">
            <div>
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="e.g., DK-ABC123-XYZ"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !orderNumber.trim()}
              className="w-full rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching...' : 'Track Order'}
            </button>
          </form>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}
        </div>

        {/* Order Details */}
        {order && (
          <div className="mt-8 space-y-6">
            {/* Status Card */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Order {order.order_number}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Placed on {new Date(order.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className={`rounded-full px-6 py-2 text-lg font-semibold ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)} {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />
                  <div className="space-y-6">
                    {/* Order Placed */}
                    <div className="relative flex gap-4">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${order.created_at ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Order Placed</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(order.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Confirmed */}
                    <div className="relative flex gap-4">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${['confirmed', 'processing', 'shipped', 'delivered'].includes(order.status) ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Order Confirmed</h3>
                        <p className="text-sm text-gray-600">
                          {['confirmed', 'processing', 'shipped', 'delivered'].includes(order.status) ? 'Confirmed' : 'Pending confirmation'}
                        </p>
                      </div>
                    </div>

                    {/* Processing */}
                    <div className="relative flex gap-4">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${['processing', 'shipped', 'delivered'].includes(order.status) ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Processing</h3>
                        <p className="text-sm text-gray-600">
                          {['processing', 'shipped', 'delivered'].includes(order.status) ? 'Being prepared' : 'Not yet processing'}
                        </p>
                      </div>
                    </div>

                    {/* Shipped */}
                    <div className="relative flex gap-4">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${['shipped', 'delivered'].includes(order.status) ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Shipped</h3>
                        <p className="text-sm text-gray-600">
                          {order.shipped_at ? new Date(order.shipped_at).toLocaleString() : 'Not yet shipped'}
                        </p>
                        {order.tracking_number && (
                          <p className="mt-1 text-sm font-medium text-purple-600">
                            Tracking: {order.tracking_number}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Delivered */}
                    <div className="relative flex gap-4">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Delivered</h3>
                        <p className="text-sm text-gray-600">
                          {order.delivered_at ? new Date(order.delivered_at).toLocaleString() : 'Not yet delivered'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Items</h3>
              <div className="space-y-4">
                {(order.items as OrderItem[]).map((item, index) => (
                  <div key={index} className="flex gap-4 border-b border-gray-200 pb-4 last:border-0">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.product.length} • {item.product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600">${item.subtotal.toFixed(2)}</p>
                        <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-purple-600">${order.total_amount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="rounded-lg bg-purple-50 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
              <p className="mt-2 text-sm text-gray-600">
                If you have any questions about your order, please contact us
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/8618718688532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact WhatsApp
                </a>
                <a
                  href="mailto:info@dkwholesale.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-purple-600 px-6 py-2 text-sm font-semibold text-purple-600 hover:bg-purple-50"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
