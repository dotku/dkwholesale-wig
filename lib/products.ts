import { Product, PriceTier } from '@/types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Brazilian Straight Lace Front Wig',
    description: 'Premium quality Brazilian human hair lace front wig with natural hairline. Pre-plucked and bleached knots for the most natural look.',
    category: 'lace-front',
    style: 'straight',
    length: '20 inches',
    color: 'Natural Black',
    material: 'human-hair',
    price: 299.99,
    wholesalePrice: 149.99,
    minOrderQuantity: 3,
    stockQuantity: 150,
    images: ['/wigs/brazilian-straight-1.jpg', '/wigs/brazilian-straight-2.jpg'],
    features: [
      '100% Brazilian Human Hair',
      'Pre-plucked hairline',
      'Bleached knots',
      '13x4 HD lace',
      '150% density'
    ],
    capSize: 'Medium (22.5")',
    capConstruction: '13x4 Lace Front'
  },
  {
    id: '2',
    name: 'Deep Wave Full Lace Wig',
    description: 'Luxurious deep wave full lace wig with 100% virgin human hair. Versatile styling with natural wave pattern.',
    category: 'full-lace',
    style: 'deep-wave',
    length: '24 inches',
    color: '1B (Off Black)',
    material: 'human-hair',
    price: 399.99,
    wholesalePrice: 199.99,
    minOrderQuantity: 2,
    stockQuantity: 85,
    images: ['/wigs/deep-wave-1.jpg', '/wigs/deep-wave-2.jpg'],
    features: [
      '100% Virgin Human Hair',
      'Full lace cap',
      'Baby hair included',
      'Natural wave pattern',
      '180% density'
    ],
    capSize: 'Medium (22.5")',
    capConstruction: 'Full Lace'
  },
  {
    id: '3',
    name: 'Body Wave Headband Wig',
    description: 'Easy-to-wear headband wig with beautiful body wave texture. No glue or lace needed, perfect for beginners.',
    category: 'headband',
    style: 'body-wave',
    length: '16 inches',
    color: 'Natural Black',
    material: 'human-hair',
    price: 199.99,
    wholesalePrice: 99.99,
    minOrderQuantity: 5,
    stockQuantity: 200,
    images: ['/wigs/headband-wave-1.jpg', '/wigs/headband-wave-2.jpg'],
    features: [
      'Machine-made wig',
      'Adjustable headband',
      'No glue needed',
      'Easy to install',
      '130% density'
    ],
    capSize: 'One Size (Adjustable)',
    capConstruction: 'Machine-Made Cap'
  },
  {
    id: '4',
    name: 'Kinky Curly U-Part Wig',
    description: 'Natural kinky curly U-part wig allowing you to leave out your own hair for a seamless blend.',
    category: 'u-part',
    style: 'kinky',
    length: '18 inches',
    color: 'Natural Black',
    material: 'human-hair',
    price: 249.99,
    wholesalePrice: 124.99,
    minOrderQuantity: 4,
    stockQuantity: 120,
    images: ['/wigs/kinky-upart-1.jpg', '/wigs/kinky-upart-2.jpg'],
    features: [
      '100% Human Hair',
      'U-part design',
      'Natural texture',
      'Can be dyed',
      '150% density'
    ],
    capSize: 'Medium (22.5")',
    capConstruction: 'U-Part'
  },
  {
    id: '5',
    name: 'Blonde Wavy Lace Front Wig',
    description: 'Stunning blonde wavy lace front wig with honey blonde highlights. Pre-colored and ready to wear.',
    category: 'lace-front',
    style: 'wavy',
    length: '22 inches',
    color: 'Honey Blonde (#27)',
    material: 'human-hair',
    price: 349.99,
    wholesalePrice: 174.99,
    minOrderQuantity: 3,
    stockQuantity: 95,
    images: ['/wigs/blonde-wavy-1.jpg', '/wigs/blonde-wavy-2.jpg'],
    features: [
      'Pre-colored blonde',
      '13x6 HD lace',
      'Pre-plucked',
      'Bleached knots',
      '180% density'
    ],
    capSize: 'Medium (22.5")',
    capConstruction: '13x6 Lace Front'
  },
  {
    id: '6',
    name: 'Curly 4x4 Closure Wig',
    description: 'Beautiful tight curly closure wig with natural bounce and volume. Perfect for protective styling.',
    category: 'closure',
    style: 'curly',
    length: '14 inches',
    color: 'Natural Black',
    material: 'human-hair',
    price: 179.99,
    wholesalePrice: 89.99,
    minOrderQuantity: 6,
    stockQuantity: 180,
    images: ['/wigs/curly-closure-1.jpg', '/wigs/curly-closure-2.jpg'],
    features: [
      '4x4 Lace closure',
      'Tight curl pattern',
      'Machine-made body',
      'Natural hairline',
      '150% density'
    ],
    capSize: 'Medium (22.5")',
    capConstruction: '4x4 Closure'
  }
];

export const priceTiers: PriceTier[] = [
  {
    minQuantity: 1,
    maxQuantity: 4,
    pricePerUnit: 1,
    discount: 0
  },
  {
    minQuantity: 5,
    maxQuantity: 9,
    pricePerUnit: 0.9,
    discount: 10
  },
  {
    minQuantity: 10,
    maxQuantity: 19,
    pricePerUnit: 0.85,
    discount: 15
  },
  {
    minQuantity: 20,
    pricePerUnit: 0.75,
    discount: 25
  }
];

export function getProductById(id: string): Product | undefined {
  return sampleProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return sampleProducts.filter(product => product.category === category);
}

export function calculatePrice(basePrice: number, quantity: number): number {
  const tier = priceTiers.find(
    t => quantity >= t.minQuantity && (t.maxQuantity ? quantity <= t.maxQuantity : true)
  );
  return tier ? basePrice * tier.pricePerUnit : basePrice;
}
