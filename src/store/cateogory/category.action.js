import { createAction } from "../../utils/reducers/reducers";
import {CATEGORIES_ACTION_TYPE} from "../cateogory/category.type"



export const setCateogory = (categoryArray) => {
return(
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES , categoryArray)
)
}

