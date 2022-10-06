import './product-card.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/card.context';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart} from '../../store/cart/cart.action';
import Button from '../buttons/buttons';
const ProductCard = ({product}) =>{
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItems)
    const {name,price,imageUrl} = product;
    // const {addItemToCart} = useContext(CartContext);
    const addItem = () =>{
        dispatch(addItemToCart(cartItem,product))
    }
return (
 <div className='product-card-container'>
    <img src={imageUrl} alt = {`${name}`}/>
    <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    <Button onClick = {addItem} buttonType="inverted">Add to cart</Button>
 </div>
)

}

export default ProductCard