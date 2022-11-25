import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyCars = () => {
     const {data:products=[]}=useQuery({
        queryKey:["products"],
        queryFn:
     })
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>AVAILABILITY</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody>
           
      
    </tbody>
  </table>
</div>
    );
};

export default MyCars;