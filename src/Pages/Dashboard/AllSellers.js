import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
   const handleDelete=(id)=>{
     fetch(`http://localhost:5000/users/${id}`,{
      method:"DELETE",
      
     }).then(res=>res.json()).then(data=>{
      console.log(data)
      toast.success("DELETION SUCESSFULL");
      refetch();

     })
   }
    const {data:sellers=[],refetch}=useQuery({
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
        <th>IMAGE</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>DELETE</th>       
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
              </tr>
            })
        }
    </tbody>
  </table>
</div>
    );
};

export default AllSellers;