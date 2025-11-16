import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600">
                <span className="text-xl font-bold text-white">DK</span>
              </div>
              <span className="text-xl font-bold text-white">
                DK Wholesale
              </span>
            </div>
            <p className="mt-4 text-sm">
              Premium quality wigs at wholesale prices.
              Serving retailers and stylists nationwide since 2020.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products?category=lace-front" className="text-sm hover:text-white">
                  Lace Front Wigs
                </Link>
              </li>
              <li>
                <Link href="/products?category=full-lace" className="text-sm hover:text-white">
                  Full Lace Wigs
                </Link>
              </li>
              <li>
                <Link href="/products?category=headband" className="text-sm hover:text-white">
                  Headband Wigs
                </Link>
              </li>
              <li>
                <Link href="/products?category=closure" className="text-sm hover:text-white">
                  Closure Wigs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/wholesale" className="text-sm hover:text-white">
                  Wholesale Info
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shipping" className="text-sm hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm hover:text-white">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} DK Wholesale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
