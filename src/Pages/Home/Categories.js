import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';


const Categories = () => {
     const [categories,setCategories]=useState([]);
    useEffect(()=>{
       fetch("http://localhost:5000/categories")
       .then(res=>res.json()).then(data=>{
        setCategories(data);
       })
    },[])
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3'>
          
        {
            categories.map(category=>{
                return  <Link to={`/categories/${category._id}`}><Category key={category._id} category={category}></Category></Link>
            })
        }
        </div>
                 
               
        
    );
};

export default Categories;