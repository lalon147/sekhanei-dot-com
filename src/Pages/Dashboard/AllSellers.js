import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data:sellers=[]}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`http://localhost:5000/users?email=seller`).then(res=>res.json()).then(data=>{
             console.log(data)
             return data
        })
    })
    
console.log(sellers);
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
            sellers.map((seller,index)=>{
                return <tr key={seller._id}>
                <th>{index+1}</th>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>{seller._id}</td>
              </tr>
            })
        }
    </tbody>
  </table>
</div>
    );
};

export default AllSellers;