import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MENU_ITEMS_DISPLAY } from "~/config/menuConfig";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  const handleButtonClick = (route) => {
    setActiveRoute(route);
    navigate(route);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ display: { md: "none" } }}
      >
        {MENU_ITEMS_DISPLAY.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => handleButtonClick(`/${item.url}`)}
            selected={activeRoute === `/${item.key}`}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {MENU_ITEMS_DISPLAY.map((item) => (
          <Button
            key={item.key}
            color="inherit"
            onClick={() => handleButtonClick(`/${item.url}`)}
            sx={{ color: activeRoute === `/${item.key}` && "primary.main" }}
          >
            {item.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Navigation;
