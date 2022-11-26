
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';


const Categories = () => {
     const [categories,setCategories]=useState([]);
     useEffect(()=>{
       fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/categories")
       .then(res=>res.json()).then(data=>{
        setCategories(data);
       })
    },[])
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          
        {
            categories.map(category=>{
                return  <Link key={category._id} to={`/categories/${category._id}`}><Category  category={category}></Category></Link>
            })
        }
        </div>
                 
               
        
    );
};

export default Categories;