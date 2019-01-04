import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  cssRoot: {
      backgroundColor: 'white',
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const NavBar = ({ setLocale, classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.cssRoot}>
          <IconButton className={classes.menuButton} arial-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.grow}>
            Keep
          </Typography>
          <Button component={ NavLink } to='/'>
            Home
          </Button>
          <Button component={ NavLink } to='/about'>
            About
          </Button>
          <Button
            onClick={() => {
              setLocale("en");
            }}
          >
            EN
          </Button>
          <Button
            onClick={() => {
              setLocale("ko");
            }}
          >
            KR
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  setLocale: PropTypes.func,
  classes: PropTypes.object.isRequired
};

NavBar.defaultProps = {
  setLocale: () => {
    console.warn("setLocale is not defined");
  },
  classes: () => {
      console.warn('classes is not defined')
  }
};

export default withStyles(styles)(NavBar)
