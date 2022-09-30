import { createContext , useState,useEffect} from "react";
import SHOP_DATA from '../shop-data.js';
import { getCatogoriesAndDocuments } from "../utils/firebase/firebase.js";


export const CateogoryContext = createContext(
{setCateogory:{}
});

export const CateogoryProvider = ( {children}) =>{
    const [cateogory,setCateogory] = useState({});
      useEffect(()=>{
        const getCAtogeriesMap = async() =>{
         const categoryMap   = await getCatogoriesAndDocuments();
        
         setCateogory(categoryMap)
      }
      getCAtogeriesMap();
    },[])
    const value = {cateogory,setCateogory}
    
    return(
       <CateogoryContext.Provider value = {value}>{children}</CateogoryContext.Provider>
    )
}

