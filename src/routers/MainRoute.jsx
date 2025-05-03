import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }
])

export default route