export default function ReturnsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Returns & Refunds Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our commitment to your satisfaction with clear return and refund guidelines
          </p>
        </div>

        {/* Return Policy */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">30-Day Return Policy</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We stand behind the quality of our products. If you are not completely satisfied with
              your purchase, you may return eligible items within 30 days of delivery for a refund
              or exchange.
            </p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Return Eligibility</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-green-600">✓ Returnable Items</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Unopened wigs in original packaging</li>
                <li>• Products with all original tags and labels attached</li>
                <li>• Items that have not been worn, altered, or customized</li>
                <li>• Products in resellable condition</li>
                <li>• Defective or damaged items (within 7 days of delivery)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-red-600">✗ Non-Returnable Items</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Opened wig packages (due to hygiene reasons)</li>
                <li>• Worn, styled, cut, or colored wigs</li>
                <li>• Items without original packaging or tags</li>
                <li>• Customized or special order items</li>
                <li>• Sale or clearance items (unless defective)</li>
                <li>• Items returned after 30 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How to Return an Item</h2>
          <div className="mt-4">
            <ol className="space-y-4 text-gray-600">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Us</h3>
                  <p className="mt-1">
                    Email us at returns@dkwholesale.com with your order number and reason for return.
                    We will provide you with a Return Authorization (RA) number and instructions.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Package Your Return</h3>
                  <p className="mt-1">
                    Pack the item securely in its original packaging. Include the RA number on the
                    outside of the box. We recommend using a trackable shipping method.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Ship Your Return</h3>
                  <p className="mt-1">
                    Ship the package to the address provided in your RA email. You are responsible
                    for return shipping costs unless the item is defective or we made an error.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Receive Your Refund</h3>
                  <p className="mt-1">
                    Once we receive and inspect your return, we will process your refund within
                    5-7 business days. Refunds will be issued to the original payment method.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Refunds */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Refund Information</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              Refunds will be issued to the original payment method within 5-7 business days after
              we receive and inspect your return. Original shipping costs are non-refundable unless
              the return is due to our error or a defective product.
            </p>
            <p>
              A 15% restocking fee may apply to returns of opened packages or items not in resellable
              condition, at our discretion.
            </p>
            <p>
              Please note that it may take an additional 5-10 business days for the refund to appear
              in your account, depending on your financial institution.
            </p>
          </div>
        </div>

        {/* Exchanges */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Exchanges</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We currently do not offer direct exchanges. If you need a different product, please
              return the original item for a refund and place a new order for the item you want.
              This ensures you get your desired product as quickly as possible.
            </p>
          </div>
        </div>

        {/* Damaged/Defective */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Damaged or Defective Items</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              If you receive a damaged or defective item, please contact us within 7 days of delivery
              at info@dkwholesale.com with photos of the damage or defect. We will arrange for a
              replacement or full refund, including return shipping costs.
            </p>
            <p>
              Please inspect your order upon receipt and contact us immediately if the item is
              defective, damaged, or if you receive the wrong item.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 rounded-lg bg-purple-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Questions About Returns?</h2>
          <p className="mt-4 text-gray-600">
            If you have any questions about our return policy or need assistance with a return,
            please don't hesitate to contact our customer service team.
          </p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>Email: returns@dkwholesale.com</p>
            <p>Phone: 1-800-WIG-SALE</p>
            <p>Hours: Mon-Fri 9am-6pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
