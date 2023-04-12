import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Gym Bro</Typography>
        {/* <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
