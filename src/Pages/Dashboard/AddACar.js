import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const AddACar = () => {
     const {user}=useContext(AuthContext);
     const nav=useNavigate();
     const {data:role={}}=useQuery({
      queryKey:["role"],
      queryFn:()=>fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/admin/${user.email}`).then(res=>res.json()).then(data=>{
          console.log(data)
          return data;
      })
     })
     console.log(role)
     const {data:categories=[]}=useQuery({
        queryKey:["categories"],
        queryFn:()=>fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/categories").then(res=>res.json()).then(data=>{
            console.log(data)
            return data;
        })
     })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const image=form.image.value;
        const company=form.company.value;
        const posted=form.posted.value;
        const condition=form.condition.value;
        const location=form.location.value;
        const used=`${form.used.value} years`;
        const seller_name=form.seller_name.value;
        const seller_email=form.seller_email.value;
        const past_price=form.past_price.value;
        const present_price=form.present_price.value;
     const car={
        name,company,present_price,past_price,seller_name,seller_email,location,used,posted,image,condition,seller_verified:role.verify
     }
   //   
     fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/cars",{
        method:"POST",
        headers:{
            "content-type":"application/json",
             authorization:`bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(car)
     }).then(res=>res.json()).then(data=>{
        toast.success("SUCCESSFULLY CAR ADDED")
        e.target.reset();
        nav("/dashboard/my-cars")
        console.log(data)})

    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
             
        <input placeholder='TYPE THE NAME OF CAR' name='name'    className='input input-bordered'></input>
        <select name="company" className='select select-bordered'>
           {
            categories?.map(category=><option key={category._id} value={category.company}>{category.name}</option>)
           }
        </select>
        <select name="condition" className="select select-bordered">
           <option disabled>CONDITION OF CAR</option>
           <option value="EXCELLENT">EXCEELLENT</option>
           <option value="GOOD">GOOD</option>
           <option value="FAIR">FAIR</option>
        </select>
        <input placeholder='HOW MANY YEARS USED' name="used" className='input input-bordered'></input>
        <input placeholder='PRESENT PRICE'  name="present_price" className='input input-bordered'></input>
        <input placeholder='ORIGINAL PRICE' name="past_price" className='input input-bordered'></input>
        <input placeholder='SELLER NAME'  name="seller_name" className='input input-bordered'></input>
        <input defaultValue={user?.email} placeholder='SELLER EMAIL' name="seller_email" className='input input-bordered'></input>
        <input placeholder='LOCATION' name="location" className='input input-bordered'></input>
        <input defaultValue={new Date()} name="posted" className='input input-bordered'></input>
        <input placeholder='PASTE THE IMAGE URL'  name="image" className='input input-bordered'></input>
        <input type="submit" className='btn bg-blue-500'></input>
   </form>
    );
};

export default AddACar;