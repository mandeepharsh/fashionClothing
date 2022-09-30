import { useContext,Fragment } from "react";
import { CateogoryContext } from "../../contexts/cateogory.context";

import PrievewCatagories from "../../components/preview-catogories/preview-catogories";




const CatagoriesPreview =()=>{
  const {cateogory} = useContext(CateogoryContext);
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