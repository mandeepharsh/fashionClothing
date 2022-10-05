import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import {categoriesReducer} from "./cateogory/cateogory.reducer"

export const rootReducer =  combineReducers({
 user: userReducer,
 categories : categoriesReducer

})