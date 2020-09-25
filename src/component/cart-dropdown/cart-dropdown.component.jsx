import React from 'react';

import './cart-dropdown.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <span className='close-button' onClick={() => dispatch(toggleCartHidden())
            }>&#10005;</span>

            {
                cartItems.length ? (
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    (<span className="empty-cart">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden())
        }
        }>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems, hidden } }) => ({
    cartItems,
    hidden
})

export default withRouter(connect(mapStateToProps)(CartDropdown))