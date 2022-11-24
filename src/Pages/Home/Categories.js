import React from 'react';


const Categories = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between'>
        <div
   className="hero my-20   "
   style={{ backgroundImage: `url("https://cdn.motor1.com/images/mgl/xqZoAk/s3/2023-audi-r8-v10-gt-rwd.jpg")`,
             width:"24rem", }}
 >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">AUDI</h1>
       
      
     </div>
   </div>
 </div>
 <div
   className="hero my-20   "
   style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg")`,
             width:"24rem", }}
 >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">LAMBORGINI</h1>
       
      
     </div>
   </div>
 </div>
 <div
   className="hero my-20   "
   style={{ backgroundImage: `url("https://global.toyota/pages/news/images/2021/08/02/1330/001.jpg")`,
             width:"24rem", }}
 >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
       <h1 className="mb-5 text-5xl font-bold">TOYOTA</h1>
       
      
     </div>
   </div>
 </div>
     </div>
                 
               
        
    );
};

export default Categories;