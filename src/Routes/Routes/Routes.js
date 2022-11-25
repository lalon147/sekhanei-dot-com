import { createBrowserRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";
import Blogs from "../../Pages/Blogs/Blogs";
import Cars from "../../Pages/Car/Cars";
import AddACar from "../../Pages/Dashboard/AddACar";
import AddACategory from "../../Pages/Dashboard/AddACategory";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import MyCars from "../../Pages/Dashboard/MyCars";
import MyInfo from "../../Pages/Dashboard/MyInfo";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
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
            },{
                path:"/blogs",
                element:<Blogs></Blogs>
            }
        ]
        
    } ,
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"/dashboard",
                element:<MyInfo></MyInfo>
            },{
                path:"/dashboard/all-sellers",
                element:<AllSellers></AllSellers>
            },{
                path:"/dashboard/all-buyers",
                element:<AllBuyers></AllBuyers>
            },{
                path:"/dashboard/add-category",
                element:<AddACategory></AddACategory>

            },{
                path:"/dashboard/add-a-car",
                element:<AddACar></AddACar>
            },{
                path:"/dashboard/my-orders",
                element:<MyOrders></MyOrders>
            },{
                path:"/dashboard/my-cars",
                element:<MyCars></MyCars>
            }
        ]
    },{
        path:"*",
        element:<NotFound></NotFound>
    }

])
