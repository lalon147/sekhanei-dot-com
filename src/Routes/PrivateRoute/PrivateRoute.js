import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <HashLoader color="#36d7b7" />
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;