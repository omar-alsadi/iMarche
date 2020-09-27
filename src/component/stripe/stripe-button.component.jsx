import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import { connect } from 'react-redux'
import { purchaseSuccess, clearCart } from './../redux/cart/cart.actions'

const StripeButtonCheckout = ({ purchaseSuccess, clearCart, price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxLjlEEuVobzH2FCXXqSrMKlsCqU8fG7MKrk9cYQbDY6SEuUmMJmCOzbq8vVefP6jnhedziMphd4hqdHKlhdAIu00AoShodse'

    const onToken = token => {
        console.log(token)
        alert("Payment Successful");
        purchaseSuccess();
        clearCart();
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

const mapDispatchToProps = dispatch => ({
    purchaseSuccess: () => dispatch(purchaseSuccess()),
    clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeButtonCheckout)