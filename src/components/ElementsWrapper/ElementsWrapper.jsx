

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const ElementsWrapper = () => (
  <Elements  stripe={stripePromise}>
    <CheckoutForm/>
  </Elements>
);

export default ElementsWrapper;
