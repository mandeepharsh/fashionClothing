
import { createContext ,useReducer} from "react";
import { createAction } from "../utils/reducers/reducers";

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
export const CartContext = createContext({
    isCartOpen : true,
    setIScartOpen :() => {},
    cartItems: [],
    addItemToCart : () => {},
    removeItemFromCart:() =>{},
    cleatCartItem : () =>{},
    cartCount : 0,
    cartTotal: 0
})



const ACTION_TYPES = {
  SET_CART_ITEMS : "SET_CART_ITEMS",
  TOOGLE_CART : "TOOGLE_CART"
}

const INITIAL_VALUE = {
  isCartOpen : false,
  cartItems: [],
  cartCount : 0,
  cartTotal: 0
}
const cartReducer = (state,action)=>{
 const {type,payload} = action 
  switch (type) {
    case ACTION_TYPES.SET_CART_ITEMS:
      return( {
        ...state,
        ...payload
       })
       case ACTION_TYPES.TOOGLE_CART:
      return( {
        ...state,
        isCartOpen : payload
       })
      
  
      default: throw new Error(`Unhandeled type ${type} in user reducer `);
  }
}
export const CartProvider = ({children}) =>{
//     const [isCartOpen,setIscartOpen] = useState(false);
//     const[cartItems , setCardItems] = useState([]);
//     const [cartCount,setCartCount] = useState(0);
//     const [cartTotal,setCartTotal] = useState(0);
// useEffect(()=>{
//   const count = 
//     cartItems.reduce((sum,cartItem) => 
//       sum + cartItem.quantity
//     ,0)
//     setCartCount(count);
  
// },[cartItems])
// useEffect(()=>{
//   const total = 
//     cartItems.reduce((sum,cartItem) => 
//       sum + cartItem.quantity*cartItem.price
//     ,0)
//     setCartTotal(total);
  
// },[cartItems])
const [{isCartOpen,cartItems,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_VALUE)

const updateCartItem = (newCartItem) => {
  const newCartCount = 
    newCartItem.reduce((sum,cartItem) => 
      sum + cartItem.quantity
    ,0)
    
    const newCartTotal = 
    newCartItem.reduce((sum,cartItem) => 
      sum + cartItem.quantity*cartItem.price
    ,0)
    

    dispatch(createAction(ACTION_TYPES.SET_CART_ITEMS,{cartItems: newCartItem , cartCount : newCartCount , cartTotal : newCartTotal }) ) 
}
   
     const addItemToCart = (productToAdd)=>{
       const newCartItem =   (addCardItems(cartItems,productToAdd))
       updateCartItem(newCartItem)
     }
     const removeItemFromCart = (productToRemove)=>{
      const newCartItem =    (removeItem(cartItems,productToRemove))
      updateCartItem(newCartItem)
       
     }
     const clearCartItem = (productToRemove)=>{
      const newCartItem = (clearItem(cartItems,productToRemove))
      updateCartItem(newCartItem)
      
   }

   const setIscartOpen =(bool) =>  {
    dispatch(createAction(ACTION_TYPES.TOOGLE_CART,bool))
   }
     const value = {isCartOpen,setIscartOpen ,cartItems,addItemToCart,cartCount,removeItemFromCart,clearCartItem,cartTotal};


    return(<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}