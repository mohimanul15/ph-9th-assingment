import { createBrowserRouter, RouterProvider } from "react-router";
import LoginLayout from '../Layout/LoginLayout/LoginLayout';
import HomeLayout from '../Layout/HomeLayout/HomeLayout';
import ErrorLayout from '../Layout/ErrorLayout/ErrorLayout';
import Home from "../Pages/Home/Home";
import Learning from '../Pages/Learning/Learning';
import Tutorial from '../Pages/Tutorial/Tutorial';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Forget from "../Pages/Forget/Forget";
import Auth from "../Pages/Auth/Auth";
import Lesson from "../Pages/Lesson/Lesson";
import Vocab from "../Pages/Vocab/Vocab";

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
                loader: () => fetch('/lesson.json'),
                element: <Learning></Learning>
            },
            {
                path: '/tutorial',
                loader: () => fetch('/tutorials.json'),
                element: <Auth><Tutorial></Tutorial></Auth>
            },
            {
                path: '/lesson',
                loader: () => fetch('/words.json'),
                element: <Auth><Lesson></Lesson></Auth>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/lesson/:lesson_id',
                loader: () => fetch('/words.json'),
                element: <Auth><Vocab></Vocab></Auth>
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