import React from "react";
import PropTypes from "prop-types";
//M-UI Stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//media query
import useMediaQuery from "@material-ui/core/useMediaQuery";
//M-UI Icons
import Location from "@material-ui/icons/Room";
import Phone from "@material-ui/icons/Phone";
import Mail from "@material-ui/icons/Mail";

const styles = (theme) => ({
  topbar: {
    background: "black",
    padding: 5,
  },
  divContact: {
    display: "flex",
    justifyContent: "center",
    texAlign: "center",
    // alignItems: "center",
  },
});
function Topbar(props) {
  const { classes } = props;
  const isActive = useMediaQuery("(max-width:600px)");
  return (
    <AppBar position="static" className={classes.topbar}>
      <Container maxWidth="lg">
        <div className={classes.divContact}>
          <Grid container spacing={1}>
            <Grid item xs={isActive ? 12 : 4}>
              <Typography variant="body2" gutterBottom>
                <Location fontSize="small" /> Managua, Nicaragua
              </Typography>
            </Grid>

            <Grid item xs={isActive ? 12 : 4}>
              <Typography variant="body2" gutterBottom>
                <Phone fontSize="small" /> +505 8431-7434
              </Typography>
            </Grid>
            <Grid item xs={isActive ? 12 : 4}>
              <Typography variant="body2" gutterBottom>
                <Mail fontSize="small" /> transporte.rodriguezv@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </AppBar>
  );
}
Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Topbar);
