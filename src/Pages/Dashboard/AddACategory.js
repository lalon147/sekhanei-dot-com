import React from 'react';

const AddACategory = () => {
     const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const image=form.image.value;
        const company=form.company.value;
        const category={name,image,company};console.log(category)
        fetch("http://localhost:5000/categories",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(category)
        }).then(res=>res.json()).then(data=>console.log(data))
        console.log()
     }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
             
             <input placeholder='TYPE THE NAME OF CAR ' name='name' className='input input-bordered'></input>
             <input placeholder='PASTE THE IMAGE URL OF CATEGORY ' name="image"className='input input-bordered'></input>
             <input placeholder='TYPE THE NAME OF COMPANY' name="company" className='input input-bordered'></input>
             <input type="submit" className='btn bg-blue-500'></input>
        </form>
    );
};

export default AddACategory;