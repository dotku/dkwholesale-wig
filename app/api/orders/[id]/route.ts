import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { UpdateOrderInput } from '@/lib/types/order';

// GET /api/orders/[id] - Get a specific order
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
      console.error('Error fetching order:', error);
      return NextResponse.json(
        { error: 'Failed to fetch order', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      order: data,
    });
  } catch (error) {
    console.error('Error in GET /api/orders/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// PATCH /api/orders/[id] - Update an order
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: UpdateOrderInput = await request.json();

    // Build update object with only provided fields
    const updateData: Record<string, any> = {};

    if (body.status !== undefined) updateData.status = body.status;
    if (body.payment_status !== undefined) updateData.payment_status = body.payment_status;
    if (body.shipping_address !== undefined) updateData.shipping_address = body.shipping_address;
    if (body.shipping_method !== undefined) updateData.shipping_method = body.shipping_method;
    if (body.tracking_number !== undefined) updateData.tracking_number = body.tracking_number;
    if (body.admin_notes !== undefined) updateData.admin_notes = body.admin_notes;
    if (body.shipped_at !== undefined) updateData.shipped_at = body.shipped_at;
    if (body.delivered_at !== undefined) updateData.delivered_at = body.delivered_at;

    // Update the order
    const { data, error } = await supabaseAdmin
      .from('orders')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
      console.error('Error updating order:', error);
      return NextResponse.json(
        { error: 'Failed to update order', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      order: data,
      message: 'Order updated successfully',
    });
  } catch (error) {
    console.error('Error in PATCH /api/orders/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE /api/orders/[id] - Delete an order (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { error } = await supabaseAdmin
      .from('orders')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting order:', error);
      return NextResponse.json(
        { error: 'Failed to delete order', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order deleted successfully',
    });
  } catch (error) {
    console.error('Error in DELETE /api/orders/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
