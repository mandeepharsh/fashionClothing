import "./checkout-item.styles.scss"
// import { useContext } from "react";
// import { CartContext } from "../../contexts/card.context";
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart,clearCartItem,removeItemFromCart}  from "../../store/cart/cart.action"
import {selectCartItems} from '../../store/cart/cart.selector'

   

const CheckoutItem = ({cartItem}) =>{
    // const {addItemToCart,clearCartItem,removeItemFromCart} = useContext(CartContext)
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch()
    const{name,imageUrl,price,quantity} = cartItem;

    const clearItem = ()=>{dispatch(clearCartItem(cartItems,cartItem))}
    return (
        <div className="checkout-item-container">
         <div className="image-container">
         <img  src={imageUrl} alt = {`${name}`} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity" ><div className="arrow" onClick={()=> dispatch(removeItemFromCart(cartItems,cartItem))}>&#10094; </div>  {quantity} <div className="arrow" onClick={()=> dispatch(addItemToCart(cartItems,cartItem))}> &#10095;</div></span>
         <span className="price">{price}</span>
         <div className="remove-button " onClick={clearItem}>&#10005;</div>
         
    
        </div>

    )
}


export default CheckoutItem