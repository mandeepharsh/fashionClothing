import { createContext ,useState,useEffect} from "react";

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

const clearItem = (cartItems,productToRemove) => cartItems.filter(item => item.id !== productToRemove.id)
export const CartContext = createContext({
    isCartOpen : false,
    setIScartOpen :() => {},
    cartItems: [],
    addItemToCart : () => {},
    removeItemFromCart:() =>{},
    cleatCartItem : () =>{},
    cartCount : 0,
    cartTotal: 0
})
export const CartProvider = ({children}) =>{
    const [isCartOpen,setIscartOpen] = useState(false);
    const[cartItems , setCardItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);
useEffect(()=>{
  const count = 
    cartItems.reduce((sum,cartItem) => 
      sum + cartItem.quantity
    ,0)
    setCartCount(count);
  
},[cartItems])
useEffect(()=>{
  const total = 
    cartItems.reduce((sum,cartItem) => 
      sum + cartItem.quantity*cartItem.price
    ,0)
    setCartTotal(total);
  
},[cartItems])
   
     const addItemToCart = (productToAdd)=>{
         setCardItems(addCardItems(cartItems,productToAdd))
     }
     const removeItemFromCart = (productToRemove)=>{
        setCardItems(removeItem(cartItems,productToRemove))
       
     }
     const clearCartItem = (productToRemove)=>{
      setCardItems(clearItem(cartItems,productToRemove))
     
   }
     const value = {isCartOpen,setIscartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart,clearCartItem,cartTotal};


    return(<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}