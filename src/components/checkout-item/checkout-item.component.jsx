import "./checkout-item.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";

   

const CheckoutItem = ({cartItem}) =>{
    const {addItemToCart,clearCartItem,removeItemFromCart} = useContext(CartContext)
    const{name,imageUrl,price,quantity} = cartItem;

    const clearItem = ()=>{clearCartItem(cartItem)}
    return (
        <div className="checkout-item-container">
         <div className="image-container">
         <img  src={imageUrl} alt = {`${name}`} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity" ><div className="arrow" onClick={()=> removeItemFromCart(cartItem)}>&#10094; </div>  {quantity} <div className="arrow" onClick={()=> addItemToCart(cartItem)}> &#10095;</div></span>
         <span className="price">{price}</span>
         <div className="remove-button " onClick={clearItem}>&#10005;</div>
         
    
        </div>

    )
}


export default CheckoutItem