import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
     const {data:buyers=[]}=useQuery({
        queryKey:["buyers"],
        queryFn:()=>fetch(`http://localhost:5000/users?email=user`).then(res=>res.json()).then(data=>{
            console.log(data)
            return data
        })
     })
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">   
    <thead>
      <tr>
        <th></th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ID</th>       
      </tr>
    </thead>
    <tbody>       
        {
            buyers.map((seller,index)=>{
                return <tr key={seller._id}>
                <th>{index+1}</th>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><img src={seller.img} className="w-12 h-12 rounded-full" alt=""/></td>
              </tr>
            })
        }
    </tbody>
  </table>
</div>
    );
};

export default AllBuyers;