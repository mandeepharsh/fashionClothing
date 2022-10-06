import {createSelector }  from 'reselect'

const cartReducer = (state) =>state.cart


export const selectCartItems = createSelector([cartReducer],
    (cart)=> cart.cartItems
    )

export const selectIsCartOpen = createSelector([cartReducer ],(cart)=>cart.isCartOpen)

export const selectCartCount = createSelector([selectCartItems],
    (cartItem)=> cartItem.reduce((sum,cartItem) => 
    sum + cartItem.quantity
  ,0))

export const selectCartTotal = createSelector([selectCartItems],(cartItem)=> cartItem.reduce((sum,cartItem) => 
sum + cartItem.quantity*cartItem.price
,0))
// functions for cartCount and Cart total used in context and know being used as a reducer
// const newCartCount = 
//     newCartItem.reduce((sum,cartItem) => 
//       sum + cartItem.quantity
//     ,0)
    
//     const newCartTotal = 
//     newCartItem.reduce((sum,cartItem) => 
//       sum + cartItem.quantity*cartItem.price
//     ,0)