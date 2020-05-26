import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// import background2 from "../assets/background2.svg";
const styles = (theme) => ({
  aboutContainer: {
    // backgroundColor: "white",
    backgroundImage: `url("pattern.svg")`,
  },
  aboutInnerContainer: {
    height: "60vh",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid rgba(0,0,0,0.3)",
  },
  about: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: "100%",
  },
  mylink: {
    textDecoration: "none",
    color: "#000",
  },
});
function About(props) {
  const { classes } = props;
  return (
    <div id="about" className={classes.aboutContainer}>
      <Container maxWidth="md" className={classes.aboutInnerContainer}>
        <div className={classes.about}>
          <Typography variant="h5" gutterBottom>
            Acerca de nosotros
          </Typography>
          <Typography variant="body1" gutterBottom>
            Somos una empresa de transporte de carga pesada nacional e
            internacional con muchos años de experiencia en el sector. Nuestros
            servicios y experiencia abarcan pero no se limitan a transportar
            mercancia en contenedores o por medio de furgones.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            Contamos con una amplia flota de equipos para satisfacer, de forma
            eficiente, la demanda de nuestros clientes.
          </Typography>
          <Button variant="outlined" className={classes.button}>
            <a
              className={classes.mylink}
              href="files/Brochure.pdf"
              target="_blank"
            >
              Saber mas
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
