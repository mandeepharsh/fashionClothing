import {ReactComponent as Shoppinglogo} from "../../assests/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartCount,selectIsCartOpen } from "../../store/cart/cart.selector";
import { toogleCart } from "../../store/cart/cart.action";
import './cart.style.scss'


const Cart = () =>{
    const dispatch = useDispatch()
 const isCartOpen = useSelector(selectIsCartOpen);
 const cartCount = useSelector(selectCartCount)
const toggleHandler = () =>{
    dispatch(toogleCart(!isCartOpen));
}
    return(
        
        <div className="cart-icon-container" onClick={toggleHandler}>
            <Shoppinglogo className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )

}

export default Cart;