import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButtonCheckout = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxLjlEEuVobzH2FCXXqSrMKlsCqU8fG7MKrk9cYQbDY6SEuUmMJmCOzbq8vVefP6jnhedziMphd4hqdHKlhdAIu00AoShodse'

    const onToken = token => {
        // console.log(token)
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            name='iMarche Superstores'
            label='Pay Now'
            description={`Your total is $${price}`}
            billingAddress
            shippingAddress
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeButtonCheckout