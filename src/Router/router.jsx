import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllMenu from "../Pages/AllMenu";
import SingleMenuDetails from "../Pages/SingleMenuDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Singup";
import Dashboard from "../Layout/Dashboard";
import Add from "../Pages/Add.jsx";
import Manage from "../Pages/Manage.jsx";
import Edit from "../Pages/Edit.jsx";
import Error from "../Component/Error.jsx";

export const router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
               {
                index:true,
                element:<Home/>,
                loader:() => fetch("http://localhost:3000/recipes"),
               },
               {
                path:"/home",
                element:<Home/>,
                loader: () => fetch("http://localhost:3000/recipes"),
               },
               {
                path:"/home/:id",
                element:<SingleMenuDetails></SingleMenuDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
               },
               {
                path:"/all",
                element:<AllMenu></AllMenu>,
                loader: () => fetch("http://localhost:3000/recipes"),
               },
               {
                path:"/login",
                element:<Login/>,
               },
               {
                path:"/signup",
                element:<Signup/>,
               },
            ]
        
    },
    {
        path:"/dashboard",
        element: <><Dashboard></Dashboard></>,
        errorElement:<Error />,
        children:[
            {
                index:true,
                element:"",
            },
           { 
              path:"profile",
              element:"",
           },
           {
             path:"manage-menu",
             element:<><Manage></Manage></>,
           },
           {
             path:"edit/:id",
             element:<><Edit></Edit>,</>
           },
           {
            path:"add-menu",
            element:<><Add></Add></>,
           }

        ]
    }
])