import React from 'react';
import Logo from '../../assets/crown.svg';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }: any): JSX.Element => {
  const priceForStripe: number = price * 100;
  const publishableKey: string = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!;

  const onToken = (token: any): void => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;