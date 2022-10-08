import { createAction } from "../../utils/reducers/reducers";
import {CATEGORIES_ACTION_TYPE} from "../cateogory/category.type"
import {getCatogoriesAndDocuments} from '../../utils/firebase/firebase'




export const fetchCategoryStart = ( ) => {
    return(
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_START)
    )
}

export const fetchCategoryFail = (error) => {
    return (
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_FAIL,error)
    )
}

export const fetchCategorySuccess = (categoryArray) => { 
return(
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_SUCESS,categoryArray)
)
}

export const fetchCatagoriesAsync = () => async(dispatch) =>{
    dispatch(fetchCategoryStart() );
    
  try {
    const catagoriesArray   = await getCatogoriesAndDocuments('catogeries');
     dispatch(fetchCategorySuccess(catagoriesArray))
  } catch (error) {
    dispatch(fetchCategoryFail())
  }
}