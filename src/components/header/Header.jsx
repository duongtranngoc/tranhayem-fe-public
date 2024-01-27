import { AppBar, Toolbar, Typography } from "@mui/material";

import Navigation from "./menu/Navigation";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
