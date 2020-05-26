import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
//logo
import logo from "../assets/logoTRV.svg";

const styles = (theme) => ({
  container: {
    // border: "1px solid #ffffff"
  },
  right: {
    position: "absolute",
    right: 0,
  },
  left: {
    position: "absolute",
    left: 0,
  },
  logo: {
    height: 60,
  },
  navlink: {
    textDecoration: "none",
    color: "#fff",
  },
});
function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Container maxWidth="lg" className={classes.container}>
        <Toolbar className="nav-container">
          <div className={classes.left}>
            <Button color="inherit">
              {/* Transporte Rodriguez V. */}
              <img className={classes.logo} src={logo} alt="Logo" />
            </Button>
          </div>
          <div className={classes.right}>
            <Button color="inherit">
              <a href="#hero" className={classes.navlink}>
                Inicio
              </a>
            </Button>
            <Button color="inherit">
              <a href="#about" className={classes.navlink}>
                Empresa
              </a>
            </Button>
            <Button color="inherit">
              <a href="#services" className={classes.navlink}>
                Servicios
              </a>
            </Button>
            <Button color="inherit">
              <a href="#experience" className={classes.navlink}>
                Experiencia
              </a>
            </Button>
            <Button color="inherit">
              <a href="#contact" className={classes.navlink}>
                Contacto
              </a>
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
