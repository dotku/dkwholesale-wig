export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: November 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              DK Wholesale ("we," "us," or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or make a purchase from us.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the site or use our services.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Personal Information</h3>
              <p className="mt-2">
                When you place an order or create an account, we may collect the following personal
                information:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through our payment processors)</li>
                <li>Business name and tax ID (for wholesale accounts)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">Automatically Collected Information</h3>
              <p className="mt-2">
                When you visit our website, we may automatically collect certain information about
                your device and browsing activities:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send promotional emails and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </div>
        </div>

        {/* Sharing Your Information */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How We Share Your Information</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>We may share your information with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who help us operate our
                business (payment processors, shipping carriers, email service providers)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any merger, sale, or
                acquisition of our business
              </li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and understand user behavior. Cookies are small data files stored
              on your device.
            </p>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may
              affect the functionality of our website.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information from unauthorized access, disclosure, alteration, or destruction.
              This includes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot guarantee absolute
              security.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@dkwholesale.com. We will respond
              to your request within 30 days.
            </p>
          </div>
        </div>

        {/* Third-Party Links */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Third-Party Websites</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately.
            </p>
          </div>
        </div>

        {/* Data Retention */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this privacy policy, unless a longer retention period is required by law.
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new Privacy Policy on this page and updating the "Last Updated"
              date. Your continued use of our services after any changes constitutes acceptance of
              the updated policy.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 rounded-lg bg-purple-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>Email: privacy@dkwholesale.com</p>
            <p>Phone: 1-800-WIG-SALE</p>
            <p>Hours: Mon-Fri 9am-6pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
