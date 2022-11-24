import { createBrowserRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";
import Cars from "../../Pages/Car/Cars";
import UserInfo from "../../Pages/Dashboard/UserInfo";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute"


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },{
                path:"/categories/:id",
                element:<PrivateRoute><Cars></Cars></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
        
    } ,
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"/dashboard",
                element:<UserInfo></UserInfo>
            }
        ]
    }

])
