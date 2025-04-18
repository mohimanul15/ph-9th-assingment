import { createBrowserRouter, RouterProvider } from "react-router";
import LoginLayout from '../Layout/LoginLayout/LoginLayout';
import CourseLayout from '../Layout/CourseLayout/CourseLayout';
import HomeLayout from '../Layout/HomeLayout/HomeLayout';
import ErrorLayout from '../Layout/ErrorLayout/ErrorLayout';
import Home from "../Pages/Home/Home";
import Learning from '../Pages/Learning/Learning';
import Tutorial from '../Pages/Tutorial/Tutorial';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Forget from "../Pages/Forget/Forget";

const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/learning',
                element: <Learning></Learning>
            },
            {
                path: '/tutorial',
                element: <Tutorial></Tutorial>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/login/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login/forget',
                element: <Forget></Forget>
            }
        ]
    },
    {
        path: 'course',
        element:<CourseLayout></CourseLayout>
    },
    {
        path: '*',
        element: <ErrorLayout></ErrorLayout>
    }
])

const Router = () => {

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Router;