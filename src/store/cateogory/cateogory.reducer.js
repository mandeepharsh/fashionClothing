

import {CATEGORIES_ACTION_TYPE} from "./category.type"



const CATEGORIES_INITIAL_STATE = {
    categories : [],
    isLoading : false,
    error : null
}

export const categoriesReducer = 
(state = CATEGORIES_INITIAL_STATE,
    action={}) =>{
    const {type,payload} = action

    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_FAIL:
            return ({...state,error : payload , isLoading:false})
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_START : 
        return ({...state,isLoading : true }) 
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_FETCH_SUCESS:
            return( 
               { ...state,
               categories: payload,
               isLoading : false
            }
            ) 
        default:
            return  state;
    }
};