import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
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
import SocialMedia from "../features/Work/Social_Media"
import Packaging from "../features/Work/PackagingDesign"
import WebUIUXDesign from '../features/Work/Web_UIUX_Design'
import NotFound from "../features/NotFound/NotFound"
import WebUIUXDesignService from '../features/Services/Web_UI_UX_Design_Service'

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children:[
            {
                index: true,
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
            // ponytail: client-side redirects for legacy URLs (GitHub Pages cannot 301); canonical tag points at new slug
            ...Object.entries({
                "/contactus": "/contact",
                "/LogoDesign": "/logo-design",
                "/Logos": "/logos",
                "/BCard": "/business-cards",
                "/Flyers": "/flyers",
                "/Real_Estate_Rodeo": "/real-estate-rodeo",
                "/Packaging": "/packaging",
                "/Social_Media": "/social-media",
                "/Web_UI_UX_Design": "/web-ui-ux-design",
                "/Web_UI_UX_Design_Service": "/web-ui-ux-design-service",
            }).map(([from, to]) => ({ path: from, caseSensitive: true, element: <Navigate to={to} replace /> })),
            {
                path: "/branding",
                element: <Branding />,
            },
            {
                path: "/logo-design",
                element: <LogoDesign />,
            },
            {
                path: "/work",
                element: <Work />,
            },
            {
                path: "/web-ui-ux-design",
                element: <WebUIUXDesign/>,
            },
            {
                path: "/logos",
                element: <Logos />,
            },
            {
                path: "/business-cards",
                element: <BCard />,
            },
            {
                path: "/flyers",
                element: <Flyers />,
            },
            {
                path: "/real-estate-rodeo",
                element: <REAL_ESTATE_RODEO />,
            },
            {
                path: "/packaging",
                element: <Packaging />,
            },
            {
                path: "/social-media",
                element: <SocialMedia/>,
            },
            {
                path: "/web-ui-ux-design-service",
                element: <WebUIUXDesignService/>,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }
])


const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes