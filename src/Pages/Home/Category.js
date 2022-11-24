import React from 'react';

const Category = ({image,name}) => {
    return (
        <div
   className="hero my-20   "
   style={{ backgroundImage: `url(${image})`,
             width:"24rem", }}
 >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">{name}</h1>
       
      
     </div>
   </div>
 </div>
    );
};

export default Category;