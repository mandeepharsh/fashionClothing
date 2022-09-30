import { Routes ,Route} from "react-router-dom";
import CatagoriesPreview from "../catagories-preview/catagories-preview.component";
import Categorie from "../catogory-component/catopgory";

const Shop =()=>{
    return(
       <Routes>
         <Route index element={<CatagoriesPreview/>} />
         <Route path=':categorie' element={< Categorie/>} />
       </Routes>
      
       



   
          
      
    )
}

export default Shop