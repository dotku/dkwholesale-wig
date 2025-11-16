'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById } from '@/lib/products';
import { calculatePrice, priceTiers } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id as string);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(product?.minOrderQuantity || 1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block text-purple-600 hover:text-purple-700"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const unitPrice = calculatePrice(product.wholesalePrice, quantity);
  const totalPrice = unitPrice * quantity;
  const savings = (product.price - product.wholesalePrice) * quantity;

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image Gallery */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - Image ${selectedImage + 1}`}
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? 'border-purple-600 ring-2 ring-purple-200'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 capitalize">
                  {product.category.replace('-', ' ')}
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 capitalize">
                  {product.style.replace('-', ' ')}
                </span>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Length:</span>
                    <span className="ml-2 font-medium text-gray-900">{product.length}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    <span className="ml-2 font-medium text-gray-900">{product.color}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Material:</span>
                    <span className="ml-2 font-medium text-gray-900 capitalize">
                      {product.material.replace('-', ' ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Cap Size:</span>
                    <span className="ml-2 font-medium text-gray-900">{product.capSize}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900">Description</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                <ul className="mt-3 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing and Order */}
            <div className="mt-6 rounded-lg bg-white p-8 shadow-sm">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-purple-600">
                  ${unitPrice.toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="rounded-full bg-red-100 px-2 py-1 text-sm font-semibold text-red-800">
                  Save {Math.round(((product.price - unitPrice) / product.price) * 100)}%
                </span>
              </div>

              <div className="mt-4 rounded-lg bg-purple-50 p-4">
                <h3 className="font-semibold text-purple-900">Wholesale Pricing Tiers</h3>
                <ul className="mt-2 space-y-1 text-sm text-purple-800">
                  {priceTiers.map((tier, index) => (
                    <li key={index}>
                      {tier.minQuantity}
                      {tier.maxQuantity ? `-${tier.maxQuantity}` : '+'} units: {tier.discount}% off
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity (Min: {product.minOrderQuantity})
                </label>
                <div className="mt-2 flex items-center gap-4">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(product.minOrderQuantity, quantity - 1))
                    }
                    className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min={product.minOrderQuantity}
                    max={product.stockQuantity}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.max(
                          product.minOrderQuantity,
                          Math.min(product.stockQuantity, parseInt(e.target.value) || 0)
                        )
                      )
                    }
                    className="w-20 rounded-lg border border-gray-300 px-4 py-2 text-center focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stockQuantity, quantity + 1))
                    }
                    className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {product.stockQuantity} units in stock
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-medium text-gray-900">Total:</span>
                  <span className="font-bold text-purple-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-green-600">
                  You save ${savings.toFixed(2)} from retail price
                </p>
              </div>

              <button
                className="mt-6 w-full rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                disabled={isAdding}
                onClick={() => {
                  setIsAdding(true);
                  addToCart(product, quantity);

                  // Show success feedback
                  setTimeout(() => {
                    setIsAdding(false);
                    const userConfirmed = confirm('Product added to cart! Would you like to view your cart?');
                    if (userConfirmed) {
                      router.push('/cart');
                    }
                  }, 300);
                }}
              >
                {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
              </button>

              <Link
                href="/contact"
                className="mt-3 block w-full rounded-full border-2 border-purple-600 px-8 py-3 text-center text-base font-semibold text-purple-600 hover:bg-purple-50"
              >
                Contact for Bulk Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
