import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";

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
        element: <MainLayout></MainLayout>
    }
])

export default route