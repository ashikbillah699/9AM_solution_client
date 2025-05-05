import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import DashboardHome from "../pages/dashboard/DashboardHome";
import CreateTask from "../pages/createTask/CreateTask";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/mainLayout',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/mainLayout/dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'createTask',
                element: <CreateTask></CreateTask>
            },
        ]
    }
])

export default route