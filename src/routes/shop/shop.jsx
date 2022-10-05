import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCateogory } from "../../store/cateogory/category.action";
import { Routes ,Route} from "react-router-dom";
import CatagoriesPreview from "../catagories-preview/catagories-preview.component";
import Categorie from "../catogory-component/catopgory";
import { getCatogoriesAndDocuments } from "../../utils/firebase/firebase";

const Shop =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCAtogeriesMap = async() =>{
     const categoryMap   = await getCatogoriesAndDocuments('catogeries');
    
     dispatch(setCateogory(categoryMap))
  }
  getCAtogeriesMap();
},[dispatch])

    return(


       <Routes>
         <Route index element={<CatagoriesPreview/>} />
         <Route path=':categorie' element={< Categorie/>} />
       </Routes>
      
       



   
          
      
    )
}

export default Shop