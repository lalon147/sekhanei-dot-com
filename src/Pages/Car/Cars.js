import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useRole from '../../hooks/useRole';
import BookModal from './BookModal';

const Cars = () => {
    const {user}=useContext(AuthContext);const nav=useNavigate();
    const [isRole]=useRole(user?.email);
    const cars=useLoaderData();
    const [bookCar,setBookCar]=useState(null)
    const handleWishList=(car)=>{
      car.bookedBy=user.email;
      console.log(car);
      fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/wish-list",{
        method:"POST",
        headers:{
          "content-type":"application/json",
           authorization:`bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(car)
      }).then(res=>res.json()).then(data=>{
        toast.success("ADDED WISH LIST")
        nav("/dashboard/wish-list")
        console.log(data)})
    }
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10'>
               {
               cars.length>0 && cars.map(car=>{
                    return( !car.sold && <div key={car._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64 w-full' src={car.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">NAME:{car.name.toUpperCase()}</h2>
                      <p className='text-left'>TIME OF POSTING: {car.posted}</p>
                      <p className='text-left'>LOCATION:{car.location.toUpperCase()}</p>
                      <p className='text-left'>YEAR:{car.year}</p>
                      <p className='text-left'>SELLER:{car.seller_name} {car.seller_verified && <div className="badge badge-accent badge-outline">verified seller</div>}</p>
                      <p className='text-left'>ORGINAL PRICE:{car.past_price}</p>
                      <p className='text-left'>PRESENT PRICE:{car.present_price}</p>
                      <p className='text-left'>USED:{car.used}</p>
                      
                      <div className="card-actions justify-center">
                        <button className='btn btn-sm bg-blue-600' onClick={()=>handleWishList(car)}>ADD TO WISHLIST</button>
                        <label disabled={isRole==="admin" || isRole==="seller"  ? true :false }  onClick={()=>setBookCar(car)}  htmlFor='car-booking' className="btn bg-blue-500 btn-outline">BOOK Now</label>
                       { bookCar && <BookModal car={bookCar}></BookModal>}
                      </div>
                    </div>
                  </div>)
                })
               }
        </div>
    );
};

export default Cars;