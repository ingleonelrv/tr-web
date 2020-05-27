import React from "react";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
//components
import Navbar from "./Components/Navbar";
import CompressNavbar from "./Components/CompressNavbar";
import Topbar from "./Components/Topbar";
import themeFile from "./Util/theme";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";

const theme = createMuiTheme(themeFile);
const styles = (theme) => ({
  container: {
    backgroundImage: `url("pattern.png")`,
    backgroundRepeat: "repeat",
  },
});
function App() {
  const isActive = useMediaQuery("(max-width:600px)");
  return (
    <MuiThemeProvider theme={theme}>
      <Topbar />
      {isActive ? <CompressNavbar /> : <Navbar />}
      <div className="container">
        <Home />
        <About />
        <Services />
        <Experience />
        <Contact />
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
