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
            <div className="mt-4 space-y-2">
              <a
                href="https://wa.me/8618718688532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: +86 187 1868 8532
              </a>
              <p className="text-sm text-gray-400">
                Email: info@dkwholesale.com
              </p>
            </div>
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
                <Link href="/track-order" className="text-sm hover:text-white">
                  Track Order
                </Link>
              </li>
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
