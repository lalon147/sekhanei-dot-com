import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyInfo = () => {
    const {user}=useContext(AuthContext);
    const {data=[]}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`http://localhost:5000/users?email=${user.email}`).then(res=>res.json()).then(data=>{
            console.log(data)
            return data
        })
    })
    console.log(data);
    return (
        <div className='flex justify-center space-x-5 '>
            <img className='w-64 h-64 rounded-full' src={user?.photoURL} alt=""/>
            <div className='shadow-lg p-4'>
               <p className='text-xl font-bold'>NAME:{user.displayName}</p>
               <p className='text-xl font-bold'>EMAIL:{user.email}</p>
               <p className='text-xl font-bold'>ROLE:{data[0]?.role}</p>
            </div >
        </div>
    );
};

export default MyInfo;