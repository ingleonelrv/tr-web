import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import trailer photos
import clasico from "../assets/cabezal.jpg";
import clasico2 from "../assets/cabezal2.JPG";
import furgones from "../assets/furgones.jpg";

const styles = (theme) => ({
  aboutContainer: {
    // backgroundColor: "white",
    backgroundImage: `url("pattern.svg")`,
  },
  aboutInnerContainer: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid rgba(0,0,0,0.3)",
    marginBottom: 10,
  },
  servicesList: {
    width: "100%",
    textAlign: "center",
  },
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 280,
  },
  gridContainer: {
    display: "flex",
  },
  gridChild: {
    display: "flex",
  },
  mylink: {
    textDecoration: "none",
    color: "#000",
  },
});

function Services(props) {
  const { classes } = props;
  const isActive = useMediaQuery("(max-width:600px)");
  // const classes = useStyles();
  return (
    <div id="services" className={classes.aboutContainer}>
      <Container maxWidth="md" className={classes.aboutInnerContainer}>
        <div className={classes.servicesList}>
          <Typography variant="h5" gutterBottom>
            Transporte de Carga terrestre Nacional e Internacional
          </Typography>
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={isActive ? 12 : 4} className={classes.gridChild}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={clasico}
                    title="chasis contenedor camion cabezal"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Transporte de contenedores
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Movemos contenedores desde y hacia a cualquier puerto
                      Centroamericano o Nacional. Tenemos experiencia
                      transportando para diferentes navieras.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="outlined" color="primary">
                    <a
                      href="https://wa.link/soh7g3"
                      className={classes.mylink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotice con nosotros
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={isActive ? 12 : 4} className={classes.gridChild}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={clasico2}
                    title="furgon camion cabezal"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Carga seca en furgones
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Contamos con furgones de 48 y 53 pies para transportar
                      carga seca ya sea nacional o a cualquier pais
                      Centroamericano.
                    </Typography>
                    <br />
                    <br />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="outlined" color="primary">
                    <a
                      href="https://wa.link/soh7g3"
                      className={classes.mylink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotice con nosotros
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={isActive ? 12 : 4} className={classes.gridChild}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={furgones}
                    title="furgon"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Alquiler de furgones
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Tenemos a disposicion furgones de 48" y 53" para alquilar
                      mensualmente como bodega.
                    </Typography>
                    <br />
                    <br />
                    <br />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="outlined" color="primary">
                    <a
                      href="https://wa.link/soh7g3"
                      className={classes.mylink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotice con nosotros
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
Services.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Services);
