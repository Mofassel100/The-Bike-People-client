import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../ErrorPages/ErrorPages";
import Login from "../ProductComponent/Authentication/Login";
import Register from "../ProductComponent/Authentication/Register";
import Home from "../ProductComponent/Home/Home";
import Main from "../ProductComponent/Main/Main";
import Product from "../ProductComponent/Product/Product";
import PrivateRouter from "./PrivateRoutes";
import Blogs from '../ProductComponent/Blogs/Blogs'
import DeshbordLayOut from "../ProductComponent/DashbordLayOut/Deshbord/DeshbordLayOut";
import Deshbord from "../ProductComponent/DashbordLayOut/Deshbord/Deshbord";
import AddAProduct from "../ProductComponent/DashbordLayOut/AddAPoroduct/AddAProduct";
import MyProduct from "../ProductComponent/DashbordLayOut/MyProduct/MyProduct";
import AllSellers from "../ProductComponent/DashbordLayOut/AllSelers/AllSellers";
import AllBuyers from "../ProductComponent/DashbordLayOut/AllBuyers/AllBuyers";
import MyOrders from "../ProductComponent/DashbordLayOut/MyOrders/MyOrders";
import AdminRoute from "./AdminPrivateRoute";
import SellarPrivateRoute from "./SellarPrivateRoute";




export const router = createBrowserRouter([
    {
    path:"/",
    element:<Main></Main>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:'/products/:company',
            element:<PrivateRouter><Product></Product></PrivateRouter>,
            loader:({params})=>fetch(`https://final-resale-project-assignment.vercel.app/products/${params.company}`)
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        }
    ]
},
{
    path:"/deshbord",
    element:<PrivateRouter><DeshbordLayOut></DeshbordLayOut></PrivateRouter>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            path:"/deshbord",
            element:<Deshbord></Deshbord>
        },
        {
           path:"/deshbord/addproduct",
           element:<SellarPrivateRoute><AddAProduct></AddAProduct></SellarPrivateRoute> 
        },
        {
            path:"/deshbord/myproduct",
            element:<SellarPrivateRoute><MyProduct></MyProduct></SellarPrivateRoute>
        },
        {
            path:'deshbord/allsellers',
            element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
        },
        {
            path:"deshbord/allbuyers",
            element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
            path:"deshbord/myorders",
            element:<MyOrders></MyOrders>
        }
    ]
    }
    
])
