import {  createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout"
import Home from "../features/Home/Home"
import AboutUs from '../features/AboutUs/AboutUs'
import ContactUS from "../features/ContactUs/ContactUs"
import Branding from "../features/Services/Branding"
import Work from "../features/Work/Work"

const router = createHashRouter([
    {
        path: "",
        element: <Layout />,
        children:[
            {
                path: "",
                element : <Home/>
            },
            {
                path: "/",
                element : <Home/>
            },

            {
                path: "/about",
                element: <AboutUs />,
            },

            {
                path: "/contact",
                element: <ContactUS />,
            },
            {
                path: "/contactus",
                element: <ContactUS />,
            },
            {
                path: "/branding",
                element: <Branding />,
            },
             {
                path: "/work",
                element: <Work />,
            },
        ]
    }
])


const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes