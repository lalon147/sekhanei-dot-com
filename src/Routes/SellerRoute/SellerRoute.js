import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useRole from '../../hooks/useRole';
import { HashLoader } from 'react-spinners';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
   
    const [isRole,isRoleLoading]=useRole(user?.email);console.log(isRole)
    const location = useLocation();

    if(loading || isRoleLoading){
        return  <div className='flex justify-center items-center'><HashLoader color="#36d7b7" size={60}  /></div>
    }

    if (user && isRole==="seller"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRoute