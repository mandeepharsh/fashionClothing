import { Fragment } from "react";
import { useSelector } from "react-redux";

import { categorySelector } from "../../store/cateogory/category.selctor";

import PrievewCatagories from "../../components/preview-catogories/preview-catogories";





const CatagoriesPreview =()=>{
  const cateogory = useSelector(categorySelector);
    return(
       <Fragment>
       {Object.keys(cateogory).map((title )=>{
        const products = cateogory[title];
        return <PrievewCatagories products= {products} title={title} key = {title}/>
        
       }
    
       )}
          
      </Fragment>
    )
}

export default CatagoriesPreview;