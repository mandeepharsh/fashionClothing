import { useState } from "react";
import { signInUserWithEmailAndPassword ,signInWithGooglePopUp} from "../../utils/firebase/firebase";
import FormInput from "../form-input-component/form-input";
import "./signIn.scss";
import Button from "../buttons/buttons";
const defaultFormFields = {
    email:"",
    password:''
}




const SignIn = () =>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password} = formFields;
    const resetFields =()=> {
        setFormFields(defaultFormFields)
    };
    const handleSumbit = async (event) =>{
        event.preventDefault();
       
        try {
           await signInUserWithEmailAndPassword(email,password)
       
          resetFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                 alert("wroung username or password")
                 break;
                case 'auth/user-not-found':
                    alert ("wrong username or password");
                break;
                default:
                    console.log(error);
            }
           
        }
      }
      const signInGoogle = async () => {
         await signInWithGooglePopUp();
     }

    const onHandelChange =(event)=>{
         const {name,value}=event.target;
         setFormFields({...formFields,[name]:value})
    }
return(
    <div className="sign-in-container">
        <h2>Already have an account</h2>
        <span>Sign In with Email and password</span>
        <form onSubmit={handleSumbit}>
            
          
           
            <FormInput label={'Email'} type='email' required onChange={onHandelChange} name='email' value={email}/>
      
            <FormInput label={'Password'} type='password' required onChange={onHandelChange} name='password' value={password}/>
        
            <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInGoogle}>
            Google sign in
          </Button>
        </div>
            
        </form>
    </div>
)
}

export default SignIn;