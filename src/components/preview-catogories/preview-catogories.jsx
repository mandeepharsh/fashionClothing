import './preview-catogories.scss'
import ProductCard from '../product-card/product-card';
import { Link } from 'react-router-dom';
const PrievewCatagories = ({title,products}) => {
    return (
 <div className='category-preview-container'>
    <h2 className='title'><Link to={title}>{title.toUpperCase()}</Link></h2>
    <div className='preview'>
       { products.slice(0,4).map((product) => 
           <ProductCard  key = {product.id} product={product}/>
        )}
    </div>

 </div>
    )
}


export default PrievewCatagories;