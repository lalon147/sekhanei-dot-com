import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
   const handleDelete=(id)=>{
     fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/${id}`,{
      method:"DELETE",
      
     }).then(res=>res.json()).then(data=>{
      console.log(data)
      toast.success("DELETION SUCESSFULL");
      refetch();

     })
   }
   const handleVeriify=(id,email)=>{
      fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/${id}`).then(res=>res.json()).then(data=>{
      refetch()
      fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/cars/verify-seller?email=${email}`,{
        method:"POST"
      }).then(res=>res.json()).then(data=>console.log(data)) 
      console.log(data)})
      
   }
    const {data:sellers=[],refetch}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users?email=seller`).then(res=>res.json()).then(data=>{
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
        <th>IMAGE</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>DELETE</th>
        <th>VERIFY</th>       
      </tr>
    </thead>
    <tbody>       
        {
            sellers.map((seller,index)=>{
                return <tr key={seller._id}>
                <th>{index+1}</th>
                <th><img src={seller.img} className="w-12 h-12 rounded-full"/></th>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><button onClick={()=>handleDelete(seller._id)} className='btn btn-xs bg-blue-500'>DELETE</button></td>
                <td>{seller.seller_verified ? "VERIFIED" :<button onClick={()=>handleVeriify(seller._id,seller.email)} className='btn btn-xs bg-blue-500'>VERIFY</button>}</td>
              </tr>
            })
        }
    </tbody>
  </table>
</div>
    );
};

export default AllSellers;