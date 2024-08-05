import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key_here');

export const useStripe = () => {
  const handleBuyCredits = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { handleBuyCredits };
};
