import {ReactComponent as Shoppinglogo} from "../../assests/shopping-bag.svg";
import './cart.style.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";


const Cart = () =>{
    const {isCartOpen,setIscartOpen,cartCount} = useContext(CartContext);

const toggleHandler = () =>{
    setIscartOpen(!isCartOpen);
}
    return(
        
        <div className="cart-icon-container" onClick={toggleHandler}>
            <Shoppinglogo className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )

}

export default Cart;