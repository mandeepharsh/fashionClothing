import {createContext,useEffect, useReducer} from 'react';
import { onAuthStateChangedListner ,createUserDocumentFromAuth} from '../utils/firebase/firebase';
import { createAction } from '../utils/reducers/reducers';
export const UserContext = createContext({
 currentUser : null,
 setCurrentUser :()=> null
});
const USER_ACTION_TYPES = {
    SET_CURRENT_USER : "SET_CURRENT_USER"
}
const INITIAL_STATE = {
    currentUser : null
}
const userReducer =(state,action)=>{
    console.log(action);
    console.log("dispatched")
    const{type,payload} = action;
        console.log (action)
         switch (type) {
            case USER_ACTION_TYPES.SET_CURRENT_USER:
                return ({
                    ...state,
                    currentUser: payload
                })
               
         
            default: throw new Error(`Unhandeled type ${type} in user reducer `);
                
         }
}


export const UserProvider = ({children}) =>{
    // const [currentUser,setCurrentUser] = useState(null);
    const [{currentUser},dispatch ] = useReducer(userReducer,INITIAL_STATE);
     console.log(currentUser)
    const setCurrentUser = (user) =>{
        dispatch(createAction({type: USER_ACTION_TYPES.SET_CURRENT_USER,payload:user}))
    }

    const value = {currentUser,setCurrentUser};
    useEffect(() =>{
        const unsuscribe = onAuthStateChangedListner((user)=>{
           if(user){
            createUserDocumentFromAuth(user);
           }
            setCurrentUser(user)})
        return unsuscribe;
    },[]
    )
    return(
        <UserContext.Provider value= {value}>{children}</UserContext.Provider>
    )
}


