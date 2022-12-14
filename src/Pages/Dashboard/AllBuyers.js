import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
  // 
  const handleDelete=(id)=>{
    fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/${id}`,{
     method:"DELETE",
     headers:{
      authorization:`bearer ${localStorage.getItem("token")}`
     } 
     
    }).then(res=>res.json()).then(data=>{
     if(data.message==="Forbidden"){
      toast.error("SOMETHING WENT WRONG PLEASE LOGIN AGAIN")
      return
     }
     toast.success("DELETION SUCESSFULL");
     refetch();

    })
  }

     const {data:buyers=[],refetch}=useQuery({
        queryKey:["buyers"],
        queryFn:()=>fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users?email=user`,{
          headers:{
            authorization:`bearer ${localStorage.getItem("token")}`
       } 
        }).then(res=>res.json()).then(data=>{
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
        <th>IMAGE</th>
        <th>EMAIL</th>
        <th>ROLE</th>  
        <th>DELETE</th>       
      </tr>
    </thead>
    <tbody>       
        {
            buyers.map((seller,index)=>{
                return <tr key={seller._id}>
                <th>{index+1}</th>
                <td><img src={seller.img} className="w-12 h-12 rounded-full" alt=""/></td>
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

export default AllBuyers;