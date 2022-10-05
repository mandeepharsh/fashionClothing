import './category.scss'
import { useParams } from 'react-router-dom'
import { useState,useEffect,Fragment} from "react";
import { useSelector } from "react-redux";
import { categorySelector } from '../../store/cateogory/category.selctor';

import ProductCard from '../../components/product-card/product-card';

const Categorie = () =>{
    const {categorie} = useParams();

    const cateogory = useSelector(categorySelector)

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