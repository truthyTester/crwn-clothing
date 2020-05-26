import { createSelector } from 'reselect'
import { createStore } from 'redux'

const selectCart = state => state.cart 

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden 
)

export const selectCartItems = createSelector (
    [selectCart],
    cart => cart.cartItems,
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQunatity, cartItem) => 
                accumulatedQunatity + cartItem.quantity, 
            0
        )
)

export const selectCartTotal = createSelector (
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQunatity, cartItem) => 
                accumulatedQunatity + cartItem.quantity * cartItem.price, 
            0
        )
)