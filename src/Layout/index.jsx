import { Outlet,useLocation } from "react-router-dom"
import { Header } from "../features/Header/Header"
import { Footer } from "../features/Footer/Footer"
import { Box } from "@mantine/core"

import {useEffect} from "react"
import Seo from "../Seo"
import CtaBand from "./CtaBand"
import { track } from "../analytics"

const Layout = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]);
  // One delegated listener covers every phone and email link on the site.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href^='tel:'], a[href^='mailto:']");
      if (a) track(a.href.startsWith("tel:") ? "phone_clicked" : "email_clicked");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
    return (
        <>

        <Seo/>
        <Header/>
        <Box>
        <Outlet/>
        </Box>
        <CtaBand />
        <Footer />
        </>
    )
}

export default Layout