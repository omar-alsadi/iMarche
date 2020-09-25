import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assest/shopping-cart.svg'

import { toggleCartHidden } from '../redux/cart/cart.actions'

import { connect } from 'react-redux'

import { selectCartItemsCount } from '../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
)

// to computing quantity and show it on cart icon
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)