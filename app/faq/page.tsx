'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is your minimum order quantity?',
    answer: 'Our minimum order quantities vary by product, typically ranging from 2-6 units. Each product page shows its specific minimum order requirement. This allows small businesses to start with manageable inventory while still enjoying wholesale pricing.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes! We offer tiered wholesale pricing with discounts increasing based on order quantity: 5-9 units get 10% off, 10-19 units get 15% off, and 20+ units get 25% off. The more you order, the more you save!',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 5-7 business days. We also offer expedited shipping options for faster delivery. Orders are processed within 1-2 business days. You will receive a tracking number once your order ships.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery for unused, unopened products in their original packaging. Due to hygiene reasons, wigs that have been opened, worn, or altered cannot be returned. Please see our Returns Policy page for complete details.',
  },
  {
    question: 'Are all your wigs made from human hair?',
    answer: 'The majority of our wigs are made from 100% human hair. We clearly label each product with its material composition. Human hair wigs offer the most natural look and can be styled, colored, and treated just like your own hair.',
  },
  {
    question: 'Can I get samples before placing a large order?',
    answer: 'Yes! We understand the importance of quality verification. You can order our minimum quantity as a sample. While we don\'t offer free samples, the minimum order requirement allows you to test our products at wholesale prices before committing to larger orders.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship to all 50 US states. International shipping is available on a case-by-case basis for large orders. Please contact us directly to discuss international shipping options and costs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and wire transfers for large orders. Payment is required at the time of order for first-time customers. Net payment terms may be available for established wholesale accounts.',
  },
  {
    question: 'How do I become a wholesale customer?',
    answer: 'Simply browse our catalog and place an order! There\'s no special application required. However, if you plan to place regular large orders, contact us to discuss setting up a wholesale account with potential additional benefits like net payment terms and dedicated support.',
  },
  {
    question: 'Can wigs be customized or styled?',
    answer: 'Our human hair wigs can be cut, styled, colored, and permed just like natural hair. However, we recommend having customization done by a professional stylist. Synthetic wigs have limited styling options and should not be heat-styled unless specifically labeled as heat-resistant.',
  },
  {
    question: 'What is the difference between lace front and full lace wigs?',
    answer: 'Lace front wigs have a lace panel at the front hairline for a natural look, while the rest is machine-made. Full lace wigs have lace throughout the entire cap, offering more versatility in styling and parting. Full lace wigs are typically more expensive but offer the most natural appearance.',
  },
  {
    question: 'How should wigs be cared for?',
    answer: 'Human hair wigs should be washed every 7-10 wears using sulfate-free shampoo and conditioner. Store on a wig stand when not in use. Avoid excessive heat styling and use heat protectant when necessary. Detailed care instructions are included with each wig purchase.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our products, ordering, and policies
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`h-6 w-6 flex-shrink-0 text-purple-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-200 px-6 pb-6 pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-lg bg-purple-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Still Have Questions?</h2>
          <p className="mt-2 text-gray-600">
            Our customer service team is here to help
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white hover:bg-purple-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
