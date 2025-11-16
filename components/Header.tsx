'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600">
              <span className="text-xl font-bold text-white">DK</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              DK Wholesale
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              All Products
            </Link>
            <Link
              href="/products?category=lace-front"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Lace Front
            </Link>
            <Link
              href="/products?category=full-lace"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Full Lace
            </Link>
            <Link
              href="/products?category=headband"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Headband Wigs
            </Link>
            <Link
              href="/wholesale"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Wholesale Info
            </Link>
          </div>

          {/* Cart and CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative rounded-full p-2 text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
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
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold text-white">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            <Link
              href="/contact"
              className="hidden rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 sm:block"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/products"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/products?category=lace-front"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lace Front
              </Link>
              <Link
                href="/products?category=full-lace"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Full Lace
              </Link>
              <Link
                href="/products?category=headband"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Headband Wigs
              </Link>
              <Link
                href="/wholesale"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wholesale Info
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
