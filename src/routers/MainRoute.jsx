import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import DashboardHome from "../pages/dashboard/DashboardHome";
import CreateTask from "../pages/createTask/CreateTask";
import CreatedTasks from "../pages/dashboard/createdTasks/CreatedTasks";
import AssignedTasks from "../pages/dashboard/assignedTasks/AssignedTasks";
import OverdueTasks from "../pages/dashboard/overdueTasks/OverdueTasks";
import EditTask from "../pages/dashboard/createdTasks/EditTask";
import Notifications from "../pages/Notifications";
import PrivetRoute from "./PrivetRoute";

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
        element: <PrivetRoute><MainLayout></MainLayout></PrivetRoute>,
        children: [
            {
                path: '/mainLayout/dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/mainLayout/createdTasks',
                element: <CreatedTasks></CreatedTasks>
            },
            {
                path: '/mainLayout/assignedTasks',
                element: <AssignedTasks></AssignedTasks>
            },
            {
                path: '/mainLayout/overdueTasks',
                element: <OverdueTasks></OverdueTasks>
            },
            {
                path: '/mainLayout/editTask',
                element: <EditTask></EditTask>
            },
            {
                path: '/mainLayout/createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: '/mainLayout/notifications',
                element: <Notifications></Notifications>
            }
        ]
    }
])

export default route