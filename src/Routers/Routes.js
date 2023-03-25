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
import BuyerPrivateRoute from "./BuyerPrivateRoute";
import Aboute from "../ProductComponent/About/Aboute";
import ContacUs from "../ProductComponent/ContactUS/ContacUs";
import ResetPassword from "../ProductComponent/Authentication/ResetPassword";
import AddGuantiHandP from "../ProductComponent/DashbordLayOut/AddGuantiHandProduct/AddGuantiHandP";
import HandProduct from "../ProductComponent/Home/HandP/HandProduct";
import HadnProDetails from "../ProductComponent/Home/HandP/HadnProDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: '/products/:company',
                element: <PrivateRouter><Product></Product></PrivateRouter>,
                loader: ({ params }) => fetch(`https://final-project-server-assignmen.vercel.app/products/${params.company}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/about",
                element: <Aboute></Aboute>
            },
            {
                path: "/contact",
                element: <ContacUs></ContacUs>
            },
            {
                path: "/resetpass",
                element:<ResetPassword></ResetPassword>
            },
            {
                path: "/hand",
                element:<HandProduct></HandProduct>,
                loader:()=>fetch("https://final-project-server-assignmen.vercel.app/hand")
            },
            {
                path: '/hand/:id',
                element: <HadnProDetails></HadnProDetails>,
                loader: ({ params }) => fetch(`https://final-project-server-assignmen.vercel.app/hand/${params.id}`)
            },
        ]
    },
    {
        path: "/deshbord",
        element: <PrivateRouter><DeshbordLayOut></DeshbordLayOut></PrivateRouter>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/deshbord",
                element: <Deshbord></Deshbord>
            },
            {
                path: "/deshbord/addproduct",
                element: <SellarPrivateRoute><AddAProduct></AddAProduct></SellarPrivateRoute>
            },
            {
                path: "/deshbord/addGuantiHand",
                element: <AddGuantiHandP></AddGuantiHandP>
            },
            {
                path: "/deshbord/myproduct",
                element: <SellarPrivateRoute><MyProduct></MyProduct></SellarPrivateRoute>
            },
            {
                path: 'deshbord/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "deshbord/allbuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "deshbord/myorders",
                element: <BuyerPrivateRoute><MyOrders></MyOrders></BuyerPrivateRoute>
            }
        ]
    }

])
