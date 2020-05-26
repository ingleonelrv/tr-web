import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import background4 from "../assets/background4.svg";
const styles = theme => ({
  aboutContainer: {
    backgroundImage: `url(${background4})`,
    backgroundSize: "cover"
  },
  aboutInnerContainer: {
    height: "112.8vh",
    display: "flex",
    alignItems: "center"
    // border: "1px solid red"
  },
  about: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.primary.contrastText
    // width: "50%"
  },
  button: {
    color: "#000000"
  }
});
function Company(props) {
  const { classes } = props;
  return (
    <div id="company-area" className={classes.aboutContainer}>
      <Container maxWidth="md" className={classes.aboutInnerContainer}>
        <div className={classes.about}>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Transporte Rodriguez V.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Transportamos su mercancia a cualquier puerto o pais
                  Centroamericano de forma segura y eficiente.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Transporte Rodriguez V.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Transportamos su mercancia a cualquier puerto o pais
                  Centroamericano de forma segura y eficiente.
                </Typography>
                <Button variant="contained" className={classes.button}>
                  Contactanos
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
Company.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Company);
