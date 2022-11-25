import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {AuthContext} from "../../context/UserContext"

const MyOrders = () => {
      const {user}=useContext(AuthContext)
      const {data:bookings=[],isLoading}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`http://localhost:5000/booking?email=${user.email}`).then(res=>res.json()).then(data=>{
          return data
          
        })
      })
     
      console.log(isLoading);
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>PAYMENT</th>
      </tr>
    </thead>
    <tbody>
        {
          bookings.map((booking,index)=>{
            return <tr key={booking._id}>
            <th>{index+1}</th>
            <td><img className='w-12 h-12 rounded-full' src={booking.image} alt=""></img></td>
            <td>{booking.carName}</td>
            <td>{booking.carPrice}</td>
            <td><button>PAY</button></td>
          </tr>
          })
        }
      
      </tbody>
      </table>
</div>
    );
};

export default MyOrders;