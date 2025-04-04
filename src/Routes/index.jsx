import {  createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout"
import Home from "../features/Home/Home"
import AboutUs from '../features/AboutUs/AboutUs'
import ContactUS from "../features/ContactUs/ContactUs"
import Branding from "../features/Services/Branding"
import Work from "../features/Work/Work"
import LogoDesign from "../features/Services/LogoDesign"
import WebDesign from "../features/Services/WebDesign"
import Logos from "../features/Work/Logos"
import BCard from "../features/Work/BCard"
import Flyers from "../features/Work/Flyers"
import REAL_ESTATE_RODEO from "../features/Work/REAL_ESTATE_RODEO"
import Packging from "../features/Work/Packging"
import Social_Media from "../features/Work/Social_Media"

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
                path: "/LogoDesign",
                element: <LogoDesign />,
            },
            {
                path: "/WebDesign",
                element: <WebDesign />,
            },
            {
                path: "/work",
                element: <Work />,
            },
            {
                path: "/Logos",
                element: <Logos />,
            },
            {
                path: "/BCard",
                element: <BCard />,
            },
            {
                path: "/Flyers",
                element: <Flyers />,
            },
            {
                path: "/Real_Estate_Rodeo",
                element: <REAL_ESTATE_RODEO />,
            },
            {
                path: "/Packging",
                element: <Packging/>,
            },
            {
                path: "/Social_Media",
                element: <Social_Media/>,
            },
        ]
    }
])


const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes