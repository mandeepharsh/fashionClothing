import { Fragment ,useContext} from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assests/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase";
import Cart from "../../components/cart/cart-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
const Navaigation = () =>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  
    return(
   <Fragment >
      <div className = "navigation">
      <Link className="logo-container" to= "/" >
        <CrwnLogo />
        </Link>
        <div className = 'nav-links-container'>
        <Link className = 'nav-link' to = "/shop"  >
          SHOP
        </Link>
        {currentUser? (<span className="nav-link" onClick={signOutUser }>Sign Out</span>):(<Link className = 'nav-link' to = "/auth"  >
          SIGN IN
        </Link>)}
        <Cart/>
        </div> 
       {isCartOpen && <CartDropdown/>}
      </div>
      
      <Outlet />
    </Fragment>)
  }


  export default Navaigation;
  
