import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import {AuthContext} from "../../context/UserContext"

const MyOrders = () => {
      
      
      const {user,logOut}=useContext(AuthContext)
      const {data:bookings=[],isLoading}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/booking?email=${user.email}`,{
          headers:{
            authorization:`bearer ${localStorage.getItem("token")}`
       } 
        }).then(res=>res.json()).then(data=>{
          if(data.message==="Forbidden"){
            toast.error("PLEASE LOGIN AGAIN");
            logOut()
          }
          return data          
        })
      })
      if(isLoading){
        return <GridLoader size={50} color='rgba(54,100,100,1)'/>
      }
     
      console.log(bookings);
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
          bookings.length>0 && bookings?.map((booking,index)=>{
            return <tr key={booking._id}>
            <th>{index+1}</th>
            <td><img className='w-12 h-12 rounded-full' src={booking.image} alt=""></img></td>
            <td>{booking.carName}</td>
            <td>{booking.carPrice}</td>
            <td>{booking.sold ? <p>PAID</p> : <Link  to={`/dashboard/payment/${booking._id}`}className='btn btn-xs bg-blue-500'>PAY</Link> } </td>
          </tr>
          })
        }
      
      </tbody>
      </table>
</div>
    );
};

export default MyOrders;