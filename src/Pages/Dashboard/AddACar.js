import React from 'react';

const AddACar = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const image=form.image.value;
        const company=form.company.value;
        const posted=form.posted.value;
        const location=form.location.value;
        const used=`${form.used.value} years`;
        const seller_name=form.seller_name.value;
        const seller_email=form.seller_email.value;
        const past_price=form.past_price.value;
        const present_price=form.present_price.value;
     const car={
        name,company,present_price,past_price,seller_name,seller_email,location,used,posted,image
     } 
     fetch("http://localhost:5000/cars",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(car)
     }).then(res=>res.json()).then(data=>console.log(data))

    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
             
        <input placeholder='TYPE THE NAME OF CAR' name='name'    className='input input-bordered'></input>
        <input placeholder='TYPE THE NAME OF COMPANY' name="company" className='input input-bordered'></input>
        <input placeholder='HOW MANY YEARS USED' name="used" className='input input-bordered'></input>
        <input placeholder='PRESENT PRICE'  name="present_price" className='input input-bordered'></input>
        <input placeholder='ORIGINAL PRICE' name="past_price" className='input input-bordered'></input>
        <input placeholder='SELLER NAME'  name="seller_name" className='input input-bordered'></input>
        <input placeholder='SELLER EMAIL' name="seller_email" className='input input-bordered'></input>
        <input placeholder='LOCATION' name="location" className='input input-bordered'></input>
        <input defaultValue={new Date()} name="posted" className='input input-bordered'></input>
        <input placeholder='PASTE THE IMAGE URL'  name="image" className='input input-bordered'></input>
        <input type="submit" className='btn bg-blue-500'></input>
   </form>
    );
};

export default AddACar;