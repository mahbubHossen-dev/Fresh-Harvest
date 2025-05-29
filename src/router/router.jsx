import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    }
])

export default router;