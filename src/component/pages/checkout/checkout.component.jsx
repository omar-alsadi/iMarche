import React from 'react';

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import './checkout.style.scss'

import CheckoutItem from '../../checkout-item/checkout-item.copmonent'
import StripeButtonCheckout from '../../stripe/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            Total : ${total}
        </div>
        <div className='text-warning'>
            *Please use the following test credit card for payment *
            <br />
            4242 4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeButtonCheckout price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)