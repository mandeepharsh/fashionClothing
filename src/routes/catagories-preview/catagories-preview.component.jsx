import { Fragment } from "react";
import { useSelector } from "react-redux";

import { categorySelector ,selectCategoriesIsLoading} from "../../store/cateogory/category.selctor";

import PrievewCatagories from "../../components/preview-catogories/preview-catogories";
import Spinner from "../../components/spinner-component/spinner.componenet";





const CatagoriesPreview =()=>{
  const cateogory = useSelector(categorySelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
    return(
       <Fragment>

       
       {isLoading? <Spinner/> :(Object.keys(cateogory).map((title )=>{
        const products = cateogory[title];
        return <PrievewCatagories products= {products} title={title} key = {title}/>
        
       }
    
       ))}
          
      </Fragment>
    )
}

export default CatagoriesPreview;