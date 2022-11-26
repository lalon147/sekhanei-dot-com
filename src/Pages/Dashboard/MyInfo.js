import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyInfo = () => {
    const {user}=useContext(AuthContext);
    const {data=[]}=useQuery({
        queryKey:["user"],
        queryFn:()=>fetch(`http://localhost:5000/users?email=${user.email}`).then(res=>res.json()).then(data=>{ 
            return data
        })
    })
    console.log(data)
    ;
    return (
        <div className='flex flex-col md:flex-row justify-center items-center space-x-5 '>
            <img className='w-64 h-64 rounded-full' src={user?.photoURL} alt=""/>
            <div className='shadow-lg p-4'>
               <p className='text-xl text-left font-bold'>NAME:{user.displayName}</p>
               <p className='text-xl text-left font-bold'>EMAIL:{user.email}</p>
               
            </div >
        </div>
    );
};

export default MyInfo;