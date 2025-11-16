import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/orders/track/[orderNumber] - Track an order by order number
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderNumber: string }> }
) {
  try {
    const { orderNumber } = await params;

    // Decode the order number in case it's URL encoded
    const decodedOrderNumber = decodeURIComponent(orderNumber);

    const { data, error } = await supabase
      .from('orders')
      .select('order_number, status, created_at, shipped_at, delivered_at, tracking_number, total_amount, items')
      .eq('order_number', decodedOrderNumber)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Order not found', message: 'No order found with this order number' },
          { status: 404 }
        );
      }
      console.error('Error tracking order:', error);
      return NextResponse.json(
        { error: 'Failed to track order', details: error.message },
        { status: 500 }
      );
    }

    // Return limited information for public tracking
    return NextResponse.json({
      success: true,
      order: {
        order_number: data.order_number,
        status: data.status,
        created_at: data.created_at,
        shipped_at: data.shipped_at,
        delivered_at: data.delivered_at,
        tracking_number: data.tracking_number,
        total_amount: data.total_amount,
        items: data.items,
      },
    });
  } catch (error) {
    console.error('Error in GET /api/orders/track/[orderNumber]:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
