import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//logo
import logo from "../assets/logoTRV.svg";

const styles = (theme) => ({
  container: {
    // border: "1px solid #ffffff",
    display: "flex",
    justifyContent: "space-between",
  },
  hamMenu: {
    // border: "1px solid #ffffff",
    width: 50,
  },
  logo: {
    height: 60,
  },
  navlink: {
    textDecoration: "none",
    color: "inherit",
  },
});
function Navbar(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.left}>
          <Button color="inherit">
            {/* Transporte Rodriguez V. */}
            <img className={classes.logo} src={logo} alt="Logo" />
          </Button>
        </div>
        <div className={classes.hamMenu}>
          <IconButton color="secondary" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a href="#hero" className={classes.navlink}>
                Inicio
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#about" className={classes.navlink}>
                Empresa
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#services" className={classes.navlink}>
                Servicios
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#experience" className={classes.navlink}>
                Experiencia
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#contact" className={classes.navlink}>
                Contacto
              </a>
            </MenuItem>
          </Menu>
        </div>
      </Container>
    </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
