import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import {FaUserAlt} from "react-icons/fa"
import toast from 'react-hot-toast';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const nav=useNavigate();
  const handleLogout=()=>{
      logOut().then(()=>{
        toast.success("USER SIGNED OUT SUCESSFULLY")
        nav("/")
      })
  }
    const listItems=<React.Fragment>
                      <li><Link className='btn btn-ghost ' to="/">HOME</Link></li>
                      <li><Link className='btn btn-ghost ' to="/blogs">BLOGS</Link></li>

                      {
                        user?.uid ?                        
                        <>
                        <li><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></li>
                        <li><Link className='btn btn-ghost' to="/dashboard">DASHBOARD</Link></li>
                        </>
                      :
                       <>
                         <li><Link className='btn btn-ghost ' to="/login">LOGIN</Link></li>
                      <li><Link className='btn btn-ghost ' to="/register">SIGN UP</Link></li>
                       </>
                      }
                     
                     </React.Fragment>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {listItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">SEKHANEI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
        listItems
      }
    </ul>
  </div>
  <div className="navbar-end">
  {
      user?.photoURL ? 
      <img src={user.photoURL} className="w-12 h-12 rounded-full hidden lg:inline-block" alt="" title={`${user.displayName}`}/>  
      :
      <FaUserAlt className='hidden lg:inline-block'></FaUserAlt>
     }
  </div>
</div>
    );
};

export default Navbar;