import React, { useState } from 'react';

const Home = () => {
     
    return (
        <div>
              <nav>
                <h3 className='text-2xl'>COMPANY:</h3>
                 <li>AUDI</li>
                 <li>TOYOTA</li>
                 <li>TESLA</li>
                <h3 className='text-2xl'>CATEGORY</h3>
                <li>SUV</li> 
                <li>CONVERTABLE</li> 
                <li>SEDAN</li>
                <h3 className='text-2xl'>PRICE RANGE</h3>
                <input defaultValue="100,0000" type="number" className='input input-bordered' placeholder='ENTER MINIMUM PRICE'/>
                <input defaultValue="500,0000" type="number" className='input input-bordered' placeholder='ENTER MAXIMUM PRICE PRICE'/>
              </nav>
        </div>
    );
};

export default Home;