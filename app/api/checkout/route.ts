import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
});

const PRODUCTS = {
  basic: {
    name: 'NestCheck Property Report - Basic',
    price: 2999,
    description: 'Climate risk, planning overlays, and amenity analysis',
  },
  premium: {
    name: 'NestCheck Property Report - Premium',
    price: 2999,  // Changed from 3999 to 2999
    description: 'Complete property intelligence including crime & safety analysis',
  },
};

export async function POST(request: Request) {
  try {
    const { address, floor, reportType, email } = await request.json();

    if (!address || !reportType || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: address, reportType, email' },
        { status: 400 }
      );
    }

    if (!['basic', 'premium'].includes(reportType)) {
      return NextResponse.json(
        { error: 'Invalid report type' },
        { status: 400 }
      );
    }

    const product = PRODUCTS[reportType as keyof typeof PRODUCTS];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?cancelled=true`,
      metadata: {
        address: address,
        floor: floor || 'na',
        reportType: reportType,
        email: email,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}