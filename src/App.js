import {useEffect} from 'react';
import { onAuthStateChangedListner ,createUserDocumentFromAuth} from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.actions';
import { useDispatch } from 'react-redux';
import Home from "./routes/home/home.route";
import Navaigation from "./routes/Navigation/Navigation";
import { Routes ,Route} from "react-router-dom";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout.component";




const App = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    const unsuscribe = onAuthStateChangedListner((user)=>{
       if(user){
        createUserDocumentFromAuth(user);
       }
        dispatch(setCurrentUser(user))})
    return unsuscribe;
},[]
)
  return (
    <Routes>
    <Route path="/" element={<Navaigation />}>
      <Route index element={<Home />} />
      <Route path="auth" element={< Authentication/>} />
      <Route path="shop/*" element={< Shop/>} />
      <Route path="checkout" element={<  Checkout/>} />
    </Route>
  </Routes>
  
  );
}

export default App;
