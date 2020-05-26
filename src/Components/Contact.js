import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";
//M-UI Icons
import Location from "@material-ui/icons/Room";
import Phone from "@material-ui/icons/Phone";
import Mail from "@material-ui/icons/Mail";

// import background5 from "../assets/background5.svg";
const styles = (theme) => ({
  aboutContainer: {
    // backgroundColor: "white",
    backgroundImage: `url("pattern.svg")`,
  },
  aboutInnerContainer: {
    minHeight: "40vh",
    display: "flex",
    alignItems: "flex-end",
    // border: "1px solid red"
  },
  about: {
    // border: "1px solid red",
    // background: "black",
    padding: theme.spacing(1),
    // color: "white",
    textAlign: "left",
  },
  logo: {
    height: 250,
  },
});
function Contact(props) {
  const { classes } = props;
  const isActive = useMediaQuery("(max-width:600px)");
  return (
    <div id="contact" className={classes.aboutContainer}>
      <Container maxWidth="md" className={classes.aboutInnerContainer}>
        <div className={classes.about}>
          <Grid container spacing={2}>
            <Grid item xs={isActive ? 12 : 4}>
              <Typography variant="h6" gutterBottom>
                Transporte Rodriguez V.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Transportamos su mercancia a cualquier puerto o pais
                Centroamericano de forma segura y eficiente.
              </Typography>
              {/* <img className={classes.logo} src={logo} alt="Logo" /> */}
            </Grid>
            <Grid item xs={isActive ? 6 : 4}>
              <Typography variant="h6" gutterBottom>
                Contactanos
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <Location />
                  </ListItemIcon>
                  <ListItemText primary="Managua, Nicaragua" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText primary="+505 8431-7434" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="transporte.rodriguezv@gmail.com" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={isActive ? 6 : 4}>
              <Typography variant="h6" gutterBottom>
                Cobertura de servicio
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemText primary="Guatemala" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Honduras" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Nicaragua" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Costa Rica" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Contact);
