import React, { useState } from 'react';
import Banner from './Banner';

const Home = () => {
     
    return (
        <div>
             <Banner></Banner>
              <nav className=''>
                <h3 className='font-bold'>COMPANY:</h3>
                 <ul className='list-none'>
                 <li>AUDI</li>
                 <li>TOYOTA</li>
                 <li>TESLA</li>
                 </ul>
                <h3 className='font-bold'>CATEGORY</h3>
                 <ul className='list-none'>
                 <li>SUV</li> 
                <li>CONVERTABLE</li> 
                <li>SEDAN</li>
                 </ul>
                <h3 className='font-bold'>PRICE RANGE</h3>
                <input defaultValue="100,0000" className='input input-bordered' placeholder='ENTER MINIMUM PRICE'/>
                <input defaultValue="500,0000"  className='input input-bordered' placeholder='ENTER MAXIMUM PRICE PRICE'/>
              </nav>
        </div>
    );
};

export default Home;