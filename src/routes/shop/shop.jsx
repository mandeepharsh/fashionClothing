import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes ,Route} from "react-router-dom";
import CatagoriesPreview from "../catagories-preview/catagories-preview.component";
import Categorie from "../catogory-component/catopgory";
import { fetchCatagoriesAsync } from "../../store/cateogory/category.action";

const Shop =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCatagoriesAsync())

},[])

    return(


       <Routes>
         <Route index element={<CatagoriesPreview/>} />
         <Route path=':categorie' element={< Categorie/>} />
       </Routes>
      
       



   
          
      
    )
}

export default Shop