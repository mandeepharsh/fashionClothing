import "./checkout.styles.scss";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/card.context";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () =>{
   //  const {cartItems,cartTotal} = useContext(CartContext)
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
    
    return (<div className="checkout-container">
           <div className="checkout-header">
             <div className="header-block">
                <span>product</span>
             </div>
             <div className="header-block">
                <span>Name</span>
             </div>
             <div className="header-block">
                <span>Quantity</span>
             </div>
             <div className="header-block">
                <span>Price</span>
             </div>
             <div className="header-block">
                <span>Remove</span>
             </div>
           </div>
        {cartItems.map((cartItem) => (
            <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />
        ))}
        <div className="total">
            Total : $ {cartTotal}
        </div>
        
    </div>
  

    )



}


export default Checkout;