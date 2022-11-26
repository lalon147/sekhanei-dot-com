import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const MyCars = () => {
      const nav=useNavigate();

     const {user}=useContext(AuthContext);
     const {data:products=[],refetch}=useQuery({
        queryKey:["products"],
        queryFn:()=>fetch(`http://localhost:5000/cars?email=${user.email}`).then(res=>res.json()).then(data=>{
            console.log(data);
            return data
        })
     })
     const handleDelete=(id)=>{
      fetch(`http://localhost:5000/cars/${id}`,{
       method:"DELETE",
       
      }).then(res=>res.json()).then(data=>{
       console.log(data)
       toast.success("DELETION SUCESSFULL");
       refetch();
  
      })}
      const handleAdvertise=(id)=>{
        fetch(`http://localhost:5000/cars/${id}`).then(res=>res.json()).then(data=>{
         nav("/")  
        console.log(data)})
      }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>IMAGE</th>
        <th>AVAILABILITY</th>
        <th>PRICE</th>
        <th>DELETE</th>
        <th>ADVERTISEMENT</th>
      </tr>
    </thead>
    <tbody>
          {
             products.map((product,index)=>{
                return  <tr key={product._id}>
                <th>{index+1}</th>
                <td><img className='w-12 h-12 rounded-full' src={product.image} alt=""></img></td>
                <td>{product.name}</td>   
                <td>{product.sold ? "SOLD" :"AVAILAVLE"}</td>
                <td>{product.present_price}</td>
                <td><button  disabled={product.sold && true} onClick={()=>handleDelete(product._id)} className='btn btn-xs'>DELETE</button></td>
             <td>{ !product.sold && !product.advertise && <button onClick={()=>handleAdvertise(product._id)} className="btn btn-xs bg-blue-500">ADVERTISE</button> }</td>

              </tr>
             })
          }  
      
    </tbody>
  </table>
</div>
    );
};

export default MyCars;