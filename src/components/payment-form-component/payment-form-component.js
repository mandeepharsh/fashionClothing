
import {CardElement,useStripe,useElements}  from  '@stripe/react-stripe-js';
import  {BUTTON_TYPE_CLASSES }from '../buttons/buttons';


import {  PaymentFormContainer, PaymentButton } from './payment.styles';
import { FormContainer } from './payment.styles';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { userSelector } from '../../store/user/user.selector'


const PaymentForm = () =>{

const stripe = useStripe();
const element = useElements();

const user = useSelector(userSelector);
const amount = useSelector(selectCartTotal);
const [isLoadingPayment,setIsLoadingPayment] = useState(false);

const paymentHandler = async(e) =>{
    e.preventDefault()
    if(!stripe || !element) {
        return;
    }
     setIsLoadingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent',{
        method : 'post',
        headers : {
            'Content-Type' : 'application/json'    
        },
        body : JSON.stringify({amount : amount *100})
    }).then((res )=>res.json());

    const ClientSecret = response.paymentIntent.client_secret;

    const paymentResult= await stripe.confirmCardPayment(ClientSecret,{
        payment_method : {
            card : element.getElement(CardElement),
            billing_details : {
                name : user ? user.displayName : "Guest" 
            }
        }
    });
         setIsLoadingPayment(false)
    if(paymentResult.error){
        alert(paymentResult.error);
    } else {
        if(paymentResult.paymentIntent.status === 'succeeded'){
            alert('Payment Successful')
        }
 
    }


    

    
};
    return (
        <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment:</h2>
          <CardElement />
          <PaymentButton
          isLoading = {isLoadingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted} >
            Pay Now
          </PaymentButton>
        </FormContainer>
      </PaymentFormContainer>
    );
  };
//         <div className='payment-form-container'>
//             <div className='formContainer'>
//             <h2> Credi Card Payment:</h2>
//             <CardElement />
//            <Button type = 'sumbit' buttonType={BUTTON_TYPE_CLASSES.inverted} onSubmit = {paymentHandler}>
//             pay Now
//            </Button>
//             </div>
          

//         </div>
    
//     )
// }

export default PaymentForm