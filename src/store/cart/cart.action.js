import { createAction } from "../../utils/reducers/reducers";
import { ACTION_TYPES } from "./cart.types";
const addCardItems = (cartItems,productToAdd)=>{
    const itemExsist = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)  
  if (itemExsist){
    return cartItems.map((cartItem) => cartItem.id ===  productToAdd.id ? {...cartItem,quantity :cartItem.quantity + 1 }:cartItem);
    
  }
  return [...cartItems, {...productToAdd , quantity:1}]
}

const removeItem = (cartItems,productToRemove) =>{
  const itemExsist = cartItems.find((cartItem)=> cartItem.id === productToRemove.id)  
  if (itemExsist.quantity === 1 ){
     return cartItems.filter(item => item.id !== productToRemove.id)
  }
   return cartItems.map((cartItem) => cartItem.id ===  productToRemove.id ? {...cartItem,quantity :cartItem.quantity - 1 }:cartItem);
}

const clearItem = (cartItems,productToRemove) => cartItems.filter(item =>  item.id !== productToRemove.id)
export const toogleCart = (boolean) =>{
    return(
    createAction(ACTION_TYPES.TOOGLE_CART,boolean))
}


export const addItemToCart = (cartItem,productToAdd)=>{
    const newCartItem =   (addCardItems(cartItem,productToAdd))
    return(
    createAction(ACTION_TYPES.SET_CART_ITEMS,newCartItem))
  }
 export  const removeItemFromCart = (cartItem,productToRemove)=>{
   const newCartItem =    (removeItem(cartItem,productToRemove))
   return(
   createAction(ACTION_TYPES.SET_CART_ITEMS,newCartItem))
  }
 export const clearCartItem = (cartItem,productToRemove)=>{
   const newCartItem = (clearItem(cartItem,productToRemove))
   return(
   createAction(ACTION_TYPES.SET_CART_ITEMS,newCartItem))   
}