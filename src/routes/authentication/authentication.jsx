
import SignUp from "../../components/Signup-component/signup.jsx";
import SignIn from "../../components/SignIn-component /signIn.jsx";
import './authintication.scss'
const Authentication = () =>{

  
    return(<div className="auth-container">
      
        <SignIn/>
        <SignUp/>
         </div>
    )
}
export default Authentication;