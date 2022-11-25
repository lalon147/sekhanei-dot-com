import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import useRole from '../hooks/useRole';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
   const {user}=useContext(AuthContext);
   const [isRole]=useRole(user.email);console.log(isRole)
    return (
        <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   ">
          <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
              {
                isRole==="admin"  && <>
                <li>
            <Link to="/dashboard/all-sellers">All SELLERS</Link>
            </li>
            <li>
            <Link to="/dashboard/all-buyers">All BUYERS</Link>
            </li>
            <li>
            <Link to="/dashboard/add-category">ADD A CATEGORY</Link>          
            </li>
            <li>
            <Link to="/dashboard/add-a-car">ADD A CAR</Link>          
            </li>
                </>
              }
              {
                isRole==="seller" && <>
            <li>
            <Link to="/dashboard/add-a-car">ADD A CAR</Link>          
            </li>
            <li>
               <Link to="/dashboard/my-cars">MY CARS</Link>
            </li>
                </>
              }
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;