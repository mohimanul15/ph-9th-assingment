import { createBrowserRouter, RouterProvider } from "react-router";
import LoginLayout from '../Layout/LoginLayout/LoginLayout';
import CourseLayout from '../Layout/CourseLayout/CourseLayout';
import HomeLayout from '../Layout/HomeLayout/HomeLayout';
import ErrorLayout from '../Layout/ErrorLayout/ErrorLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>
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