import { Product } from '../products';

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number; // Price at time of order
  subtotal: number;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded';

export interface Order {
  id: string;
  order_number: string;

  // Customer information
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  customer_whatsapp?: string;
  business_name?: string;

  // Order details
  items: OrderItem[];
  subtotal: number;
  discount_amount: number;
  total_amount: number;
  total_quantity: number;

  // Shipping information
  shipping_address?: string;
  shipping_method?: string;
  tracking_number?: string;

  // Status
  status: OrderStatus;
  payment_status: PaymentStatus;

  // Notes
  notes?: string;
  admin_notes?: string;

  // Timestamps
  created_at: string;
  updated_at: string;
  shipped_at?: string;
  delivered_at?: string;
}

export interface CreateOrderInput {
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  customer_whatsapp?: string;
  business_name?: string;
  items: OrderItem[];
  subtotal: number;
  discount_amount: number;
  total_amount: number;
  total_quantity: number;
  shipping_address?: string;
  notes?: string;
}

export interface UpdateOrderInput {
  status?: OrderStatus;
  payment_status?: PaymentStatus;
  shipping_address?: string;
  shipping_method?: string;
  tracking_number?: string;
  admin_notes?: string;
  shipped_at?: string;
  delivered_at?: string;
}
