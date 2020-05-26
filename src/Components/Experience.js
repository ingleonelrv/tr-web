import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";
//images
import centrolac from "../assets/clients/centrolac.jpg";
import chiquita from "../assets/clients/chiquita.jpg";
import femsa from "../assets/clients/femsa.png";
import gildan from "../assets/clients/gildan.png";
import saratoga from "../assets/clients/saratoga.jpg";
import lanco from "../assets/clients/lanco.png";

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
  experienceList: {
    width: "100%",
    textAlign: "center",
  },
  card: {
    maxWidth: 345,
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
});

function Experience(props) {
  const { classes } = props;
  const isActive = useMediaQuery("(max-width:600px)");
  // const classes = useStyles();
  const tileData = [
    {
      img: centrolac,
      title: "Centrolac S.A.",
    },
    {
      img: chiquita,
      title: "Chiquita",
    },
    {
      img: femsa,
      title: "Coca-Cola FEMSA",
    },
    {
      img: gildan,
      title: "Gildan",
    },
    {
      img: saratoga,
      title: "Saratoga",
    },
    {
      img: lanco,
      title: "Lanco",
    },
  ];
  return (
    <div id="experience" className={classes.aboutContainer}>
      <Container maxWidth="md" className={classes.aboutInnerContainer}>
        <div className={classes.experienceList}>
          <Typography variant="h5" gutterBottom>
            ¿Por qué confiar en nosotros?
          </Typography>
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={isActive ? 12 : 6} className={classes.gridChild}>
              <Paper elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Nuestras Fortalezas y Experiencia
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <ol>
                    <li>Equipo altamente calificado y experimentado.</li>
                    <li>
                      Normas de seguridad y monitoreo estricto de equipos y
                      carga.
                    </li>
                    <li>
                      Mantenimiento preventivo cada viaje para mayor eficiencia.
                    </li>
                    <li>
                      Mas de 8 años de experiencia moviendo contenedores secos y
                      refrigerados.
                    </li>
                    <li>
                      Experiencia transportando carga en furgones desde y hacia
                      toda Centroamérica.
                    </li>
                    <li>
                      Capacidad de reaccion rapida para solucionar cualquier
                      percance y hacer llegar su mercancia en tiempo y forma.
                    </li>
                  </ol>
                </Typography>
                <br />
                <Typography variant="body2" gutterBottom>
                  Esto y más nos ha permitido mantenernos sin un solo accidente
                  de gravedad o sufrir robo de equipos.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={isActive ? 12 : 6} className={classes.gridChild}>
              <Paper elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Algunos de nuestros Clientes
                </Typography>
                <div className={classes.root}>
                  <GridList cellHeight={120} className={classes.gridList}>
                    {tileData.map((tile) => (
                      <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          actionIcon={
                            <IconButton
                              aria-label={`info about ${tile.title}`}
                              className={classes.icon}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Experience);
