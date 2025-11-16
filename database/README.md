# Database Setup

This directory contains the database schema for the DK Wholesale order management system.

## Setup Instructions

### 1. Run the SQL Schema

To create the orders table in your Supabase database:

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to the **SQL Editor**
3. Copy the contents of `schema.sql`
4. Paste it into the SQL Editor
5. Click **Run** to execute the SQL commands

### 2. Verify Table Creation

After running the schema, you can verify the table was created:

1. Go to **Table Editor** in your Supabase dashboard
2. You should see the `orders` table listed
3. Click on it to view the structure

## Database Schema

The `orders` table includes:

- **Basic Info**: Order ID, order number, timestamps
- **Customer Info**: Name, email, phone, WhatsApp, business name
- **Order Details**: Items (JSON), subtotal, discount, total, quantity
- **Shipping**: Address, method, tracking number
- **Status**: Order status, payment status
- **Notes**: Customer notes, admin notes
- **Timestamps**: Created, updated, shipped, delivered

## Features

- Automatic order number generation
- Automatic timestamp updates via trigger
- Indexes for fast queries
- Row Level Security (RLS) enabled
- JSONB storage for flexible item data
