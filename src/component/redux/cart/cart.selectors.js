import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((previousQuantity, cartItem) =>
        previousQuantity + cartItem.quantity, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((previousQuantity, cartItem) =>
        previousQuantity + cartItem.quantity * cartItem.price, 0)
)

export const selectPurchaseSuccess = createSelector(
    [selectCart],
    cart => cart.purchaseSuccess
)