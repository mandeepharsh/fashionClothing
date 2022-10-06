import "./cart-dropdown.scss"
// import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-items/cart-items";
import Button from "../buttons/buttons";
// import { CartContext } from "../../contexts/card.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckout = () =>{
      return(navigate('/checkout'))
    }
    return(
<div className="cart-dropdown-container">
      {cartItems.length ? (<div className="cart-items">
      {cartItems.map(item=>(<CartItem key ={item.id} cartItems={item}/>))}
    </div>): <span className="empty-message">Your cart is empty</span>}
    
    <Button onClick = {goToCheckout} >Go to checkout</Button>
</div>)
}

export default  CartDropdown;