import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import Routes from "./Routes";
import '@mantine/core/styles.css'
import './translations/i18n'


const theme = createTheme({
  fontFamily: "Poppins",
});
const App=()=>
{
  return (
    <>
      
      <MantineProvider theme={theme}>
        <Routes />
      </MantineProvider>
    </>
  );
};
export default App;