import { ACTION_TYPES } from "./cart.types"


const CART_INITIAL_VALUE = {
    isCartOpen : false,
    cartItems: [],
  
  }
 export  const cartReducer = (state = CART_INITIAL_VALUE ,action = {})=>{
   const {type,payload} = action 
    switch (type) {
      case ACTION_TYPES.SET_CART_ITEMS:
        return( {
          ...state,
          cartItems : payload
         })
         case ACTION_TYPES.TOOGLE_CART:
        return( {
          ...state,
          isCartOpen : payload
         })
        
    
        default: 
        return state;
    }
  }