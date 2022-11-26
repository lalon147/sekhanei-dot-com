import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Advertisement = () => {
    const {data:cars=[],refetch}=useQuery({
        queryKey:["cars"],
        queryFn:()=>fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/cars/advertise").then(res=>res.json()).then(data=>{
            return data;
        })
    })
    console.log(cars);
    return (
        <div>
                {
                    cars.length>0 && <div className="w-1/2 mx-auto bg-slate-200 p-4 my-10 rounded-xl">
                                         {
                                             cars.map(car=>{
                                                 return <div key={car._id}>
                                             <p className="font-bold text-2xl">{car.company.toUpperCase()}</p>
                                             <img className="w-full mx-auto " src={car.image} alt=""/> 
                                             <p>PRICE:{car.present_price}</p>   
                                                        </div>
                                             })
                                         }  
                                     </div>
                }
        </div>
    );
};

export default Advertisement;