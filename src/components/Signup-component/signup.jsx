import { useState } from "react";
import { createUserAuthWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase";
import FormInput from "../form-input-component/form-input";
import "./signup.scss";
import Button from "../buttons/buttons";
const defaultFormFields = {
    displayName :'',
    email:"",
    password:'',
    confirmPassword:''
}



const SignUp = () =>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    
    const resetFields =()=> {
        setFormFields(defaultFormFields)
    };
    const handleSumbit = async (event) =>{
        event.preventDefault();
        if (password!== confirmPassword){
           alert("Password does not match");
          return;}
        try {
          const {user} = await createUserAuthWithEmailAndPassword(email,password);
       
          await createUserDocumentFromAuth(user,{displayName});
          
           
          resetFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("email alerady exsist")
            }else{
                console.log("error creating user")
            }
        }
      }

    const onHandelChange =(event)=>{
         const {name,value}=event.target;
         setFormFields({...formFields,[name]:value})
    }
return(
    <div className="sign-up-container">
        <h2>Don't have an account</h2>
        <span>Sign Up with Email and password</span>
        <form onSubmit={handleSumbit}>
            
            <FormInput label={'Display Name'} type='text' required onChange={onHandelChange} name='displayName' value = {displayName}/>
           
            <FormInput label={'Email'} type='email' required onChange={onHandelChange} name='email' value={email}/>
      
            <FormInput label={'Password'} type='password' required onChange={onHandelChange} name='password' value={password}/>
        
            <FormInput label={'Confirm Password'} type = "password" required onChange={onHandelChange} name ='confirmPassword' value={confirmPassword}/>
            <Button type = 'sumbit'> SignUp </Button>
        </form>
    </div>
)
}

export default SignUp;