import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ModeSwitch from "~/components/modeSwitch/ModeSwitch";

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
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {MENU_ITEMS_DISPLAY.map((item) => (
          <Button
            key={item.title}
            color="inherit"
            onClick={() => handleButtonClick(`/${item.url}`)}
            sx={{
              color: (theme) =>
                activeRoute === `/${item.url}` && theme.components.active,
              width: 120,
            }}
          >
            {item.title}
          </Button>
        ))}
      </Box>

      <ModeSwitch />

      <IconButton
        size="medium"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        sx={{ display: { md: "none" }, padding: "5px" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClick={handleMenuClose}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ display: { md: "none" } }}
      >
        {MENU_ITEMS_DISPLAY.map((item) => (
          <MenuItem
            key={item.title}
            onClick={() => handleButtonClick(`/${item.url}`)}
            selected={activeRoute === `/${item.url}`}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Navigation;
