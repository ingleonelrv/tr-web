import React from "react";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
//components
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import themeFile from "./Util/theme";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const theme = createMuiTheme(themeFile);
const styles = (theme) => ({
  container: {
    backgroundImage: `url("pattern.png")`,
    backgroundRepeat: "repeat",
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Topbar />
      <Navbar />
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
