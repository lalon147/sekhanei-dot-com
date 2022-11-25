import React from 'react';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M6IHMCSwhlczGM7RDTg0jGs4nH0DRM1jAvm9e0lk4DZ5XMmHU92whRf6Pw5bCUqQLqNPjDhMkDn18QUHvtkfKS300tgJfbydv');



const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  };
const Payment = () => {
     const data=useLoaderData();
     console.log(data)
    return (
        <div>
             <h3 className='text-3xl'>PAYMENT FOR {data.carName}</h3>
             <p className='font-bold text-2xl'>TOTAL COST: {data.carPrice}BDT</p>
             <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                 <CheckoutForm data={data} />
             </Elements>
        </div>
    );
};

export default Payment;