import { Outlet,useLocation } from "react-router-dom"
import { Header } from "../features/Header/Header"
import { Footer } from "../features/Footer/Footer"
import { Box } from "@mantine/core"

import {useEffect} from "react"

const Layout = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <>

        <Header/>
        <Box>
        <Outlet/>
        </Box>
        <Footer />
        </>
    )
}

export default Layout