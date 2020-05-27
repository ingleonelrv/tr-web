import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import background1 from "../assets/Background1.png";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";

const styles = (theme) => ({
  homeContainer: {
    minHeight: "80vh",
    // background: theme.palette.primary.dark,
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    // border: "3px solid #fff"
  },
  homeInnerContainer: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.primary.contrastText,
    // border: "1px solid #fff"
  },
  button: {
    color: theme.palette.primary.contrastText,
  },
  homeImage: {
    position: "absolute",
    right: 50,
    bottom: 0,
  },
  mylink: {
    textDecoration: "none",
    color: "#000",
  },
});
function Home(props) {
  const { classes } = props;
  const isActive = useMediaQuery("(max-width:600px)");
  return (
    <Container maxWidth="lg" className={classes.homeContainer}>
      <div id="hero" className={classes.homeInnerContainer}>
        <Grid container spacing={1}>
          <Grid item xs={isActive ? 12 : 4}>
            <div className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Transporte Rodriguez V.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Transportamos su mercancia en furgones y/o contenedores a
                cualquier puerto o pais Centroamericano de forma segura y
                eficiente.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <a
                  href="https://wa.link/soh7g3"
                  className={classes.mylink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactanos
                </a>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
