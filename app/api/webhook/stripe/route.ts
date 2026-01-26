import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: '2025-12-15.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const { address, floor, reportType, email } = session.metadata || {};

    console.log('✅ Payment received!');
    console.log('Address:', address);
    console.log('Floor:', floor);
    console.log('Report Type:', reportType);
    console.log('Email:', email);

    // TODO: Generate PDF report and send email
    // For now, just log the successful payment
    // We'll connect this to your Python backend later

    try {
      // Placeholder for report generation
      // await generateAndSendReport({ address, floor, reportType, email });
      
      console.log('Order processed successfully');
    } catch (error) {
      console.error('Error processing order:', error);
    }
  }

  return NextResponse.json({ received: true });
}