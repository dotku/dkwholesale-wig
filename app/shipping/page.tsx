export default function ShippingPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Shipping Information</h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our shipping policies and delivery times
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Shipping Methods & Rates</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Standard Shipping</h3>
                  <p className="text-sm text-gray-600">5-7 business days</p>
                </div>
                <span className="font-bold text-purple-600">FREE on orders $500+</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Orders under $500: $15.00 flat rate
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Express Shipping</h3>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
                <span className="font-bold text-purple-600">$35.00</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Overnight Shipping</h3>
                  <p className="text-sm text-gray-600">Next business day</p>
                </div>
                <span className="font-bold text-purple-600">$75.00</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Orders must be placed by 2 PM EST for next-day delivery
              </p>
            </div>
          </div>
        </div>

        {/* Processing Time */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Order Processing</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              All orders are processed within 1-2 business days (Monday-Friday, excluding holidays).
              Orders placed after 2 PM EST will be processed the next business day.
            </p>
            <p>
              You will receive an email confirmation when your order is placed and another email
              with tracking information once your order has shipped.
            </p>
          </div>
        </div>

        {/* Shipping Locations */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Shipping Locations</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We currently ship to all 50 states in the United States. We do not ship to P.O. boxes
              for certain products that require signature confirmation.
            </p>
            <p>
              International shipping is available for large wholesale orders on a case-by-case basis.
              Please contact us at info@dkwholesale.com for international shipping quotes and details.
            </p>
          </div>
        </div>

        {/* Tracking */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Order Tracking</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              Once your order ships, you will receive an email with a tracking number and a link
              to track your package. You can also track your order by logging into your account
              on our website.
            </p>
            <p>
              Please allow 24 hours after receiving your tracking number for the tracking information
              to be available in the carrier's system.
            </p>
          </div>
        </div>

        {/* Shipping Issues */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Shipping Issues</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Lost or Damaged Packages</h3>
              <p className="mt-2">
                If your package is lost or damaged during shipping, please contact us immediately
                at info@dkwholesale.com. We will work with the carrier to resolve the issue and
                ensure you receive your order or a refund.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Incorrect Address</h3>
              <p className="mt-2">
                Please ensure your shipping address is correct before placing your order. We are
                not responsible for orders shipped to incorrect addresses provided by the customer.
                Address changes after order placement may incur additional fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Delivery Delays</h3>
              <p className="mt-2">
                While we strive to meet all delivery estimates, delays may occur due to weather,
                carrier issues, or other unforeseen circumstances. We are not responsible for
                shipping delays caused by the carrier.
              </p>
            </div>
          </div>
        </div>

        {/* Bulk Orders */}
        <div className="mt-8 rounded-lg bg-purple-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Large/Bulk Orders</h2>
          <p className="mt-4 text-gray-600">
            For orders over $2,000 or requiring special shipping arrangements, please contact us
            directly. We can provide custom shipping quotes and arrange freight shipping for
            very large orders.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700"
          >
            Contact Us for Large Orders
          </a>
        </div>
      </div>
    </div>
  );
}
