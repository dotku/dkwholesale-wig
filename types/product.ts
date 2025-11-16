export interface Product {
  id: string;
  name: string;
  description: string;
  category: WigCategory;
  style: WigStyle;
  length: string;
  color: string;
  material: WigMaterial;
  price: number;
  wholesalePrice: number;
  minOrderQuantity: number;
  stockQuantity: number;
  images: string[];
  features: string[];
  capSize: string;
  capConstruction: string;
}

export type WigCategory =
  | 'lace-front'
  | 'full-lace'
  | 'u-part'
  | 'headband'
  | 'closure'
  | 'frontal';

export type WigStyle =
  | 'straight'
  | 'wavy'
  | 'curly'
  | 'kinky'
  | 'body-wave'
  | 'deep-wave';

export type WigMaterial =
  | 'human-hair'
  | 'synthetic'
  | 'blend';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface PriceTier {
  minQuantity: number;
  maxQuantity?: number;
  pricePerUnit: number;
  discount: number;
}
