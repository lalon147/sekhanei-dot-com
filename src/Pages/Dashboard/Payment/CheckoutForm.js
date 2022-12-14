import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import { useNavigate } from 'react-router-dom';

const CheckoutFomr = ({data}) => {
    const stripe=useStripe();
    const elements=useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { carPrice, email, _id,seller_email,carId } = data;
    const nav=useNavigate()
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      // 
      
      fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/create-payment-intent", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
               authorization:`bearer ${localStorage.getItem("token")}`
              
          },
          body: JSON.stringify({ carPrice }),
      })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setClientSecret(data.clientSecret)});
  }, [carPrice]);

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      return
  }
     const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card
      });

    if(error){
        // console.log(error)
        setCardError(error.message)
    }
    else{
        setCardError("")
    }
    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  
                  email: email
              },
          },
      },
  );
    if(confirmError){
      setCardError(confirmError.message);
      return 
    }
    // console.log("paymentIntent",paymentIntent)

    if (paymentIntent.status === "succeeded") {
      // console.log('card info', card);
      // store payment info in the database
      const payment = {
          carPrice,
          transactionId: paymentIntent.id,
          email,
          bookingId: _id,seller_email,paid:true,carId
      }
      fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/payments",{
        method:"POST",
        headers:{
          "content-type":"application/json",
           authorization:`bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payment)
      }).then(res=>res.json()).then(data=>{
        fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/booking/${_id}`,{
          method:"PUT",
          headers:{
            authorization:`bearer ${localStorage.getItem("token")}`
       }
          
        }).then(res=>res.json()).then(data=>console.log(data))
        fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/cars/${carId}`,{
          method:"PUT",
          headers:{
            authorization:`bearer ${localStorage.getItem("token")}`
       }
        }).then(res=>res.json()).then(data=>{
          console.log(data);
        })

        nav("/dashboard/my-orders");
        
        // console.log(data)
        })
      
  }
  setProcessing(false);
        
      };
    return (
        <div>
             <form onSubmit={handleSubmit} >
      <CardElement
        options={{
          style: {
        
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
              <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
    </form>
    <p className="text-red-500">{cardError}</p>
    {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutFomr;