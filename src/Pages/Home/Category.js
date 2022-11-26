import React from 'react';

const Category = ({category}) => {
    const {name,image}=category;
    return (
        <div
   className="hero "
   style={{ backgroundImage: `url(${image})`,
              }}
 >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">{name.toUpperCase()}</h1>
       
      
     </div>
   </div>
 </div>
    );
};

export default Category;