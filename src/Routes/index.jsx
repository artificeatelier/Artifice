import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout"
import Home from "../features/Home/Home"
import AboutUs from '../features/AboutUs/AboutUs'
import ContactUS from "../features/ContactUs/ContactUs"
import Branding from "../features/Services/Branding"
import Work from "../features/Work/Work"
import LogoDesign from "../features/Services/LogoDesign"
import Logos from "../features/Work/Logos"
import BCard from "../features/Work/BCard"
import Flyers from "../features/Work/Flyers"
import REAL_ESTATE_RODEO from "../features/Work/REAL_ESTATE_RODEO"
import Social_Media from "../features/Work/Social_Media"
import Packaging from "../features/Work/PackagingDesign"
import Web_UI_UX_Design from '../features/Work/Web_UIUX_Design'
import Web_UI_UX_Design_Service from '../features/Services/Web_UI_UX_Design_Service'

const router = createBrowserRouter([
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
                path: "/work",
                element: <Work />,
            },
            {
                path: "/Web_UI_UX_Design",
                element: <Web_UI_UX_Design/>,
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
                path: "/Packaging",
                element: <Packaging />,
            },
            {
                path: "/Social_Media",
                element: <Social_Media/>,
            },
            {
                path: "/Web_UI_UX_Design_Service",
                element: <Web_UI_UX_Design_Service/>,
            },
            
        ]
    }
])


const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes