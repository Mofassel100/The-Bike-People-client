import { createBrowserRouter } from "react-router-dom";
import Login from "../ProductComponent/Authentication/Login";
import Register from "../ProductComponent/Authentication/Register";
import Home from "../ProductComponent/Home/Home";
import Main from "../ProductComponent/Main/Main";

export const router = createBrowserRouter([{
    path:"/",
    element:<Main></Main>,
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
        }
    ]
},



])
