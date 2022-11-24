import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cars = () => {
    const cars=useLoaderData();
    console.log(cars)
    return (
        <div className='grid grid-cols-1  md:grid-cols-3 my-10 mx-10'>
               {
                cars.map(car=>{
                    return <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                        <button className="btn bg-blue-500 btn-outline">Buy Now</button>
                      </div>
                    </div>
                  </div>
                })
               }
        </div>
    );
};

export default Cars;