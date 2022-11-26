import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const WishList = () => {
    const {user}=useContext(AuthContext);
    const [wishList,setWishList]=useState([]);
    useEffect(()=>{

   fetch(`http://localhost:5000/wish-list?email=${user.email}`).then(res=>res.json())
     .then(data=>{
        console.log(data)
        setWishList(data)
     })

    },[user])
   
    console.log(wishList);
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>PRICE</th>
        <th>IMAGE</th>
        <th>BUY</th>
      </tr>
    </thead>
    <tbody>
    {
    wishList?.length>0  && wishList.map((wish,index)=>{
        return <tr key={index}>
        <th>{index+1}</th>
        <td>{wish.name}</td>
        <td>{wish.present_price}</td>
        <td><img src={wish.image} className="w-12 h-12 rounded-full" alt=""/></td>
        <td><Link to={`/dashboard/payment/${wish._id}`} className='btn btn-xs bg-blue-500'>BUY</Link></td>
      </tr>
    })
   }
      
      
      
     
    </tbody>
  </table>
</div>
    );
};

export default WishList;


