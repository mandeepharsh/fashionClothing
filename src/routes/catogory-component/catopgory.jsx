import './category.scss'
import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect,Fragment} from "react";
import { CateogoryContext } from '../../contexts/cateogory.context'; 
import ProductCard from '../../components/product-card/product-card';

const Categorie = () =>{
    const {categorie} = useParams();
    const {cateogory} = useContext(CateogoryContext);

    const[products,setProducts] = useState(cateogory[categorie])

    useEffect(()=>{
       setProducts(cateogory[categorie])
    },[categorie,cateogory])
return(
  <Fragment>
        <h2 className='catagorie-title'>{categorie.toUpperCase()}</h2>
       <div className='category-container'>
        {products && products.map((product)=> <ProductCard key={product.id} product = {product} />)}
    </div>

  </Fragment>
   
)

}


export default Categorie