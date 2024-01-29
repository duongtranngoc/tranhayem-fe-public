import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ModeSwitch from "~/components/modeSwitch/ModeSwitch";

import { MENU_ITEMS_DISPLAY } from "~/config/menuConfig";

import NavigationButton from "./navigationButton/NavigationButton";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const handleButtonClick = (route) => {
    if (route !== activeRoute) {
      setActiveRoute(route);
      navigate(route);
    }
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
          <NavigationButton
            key={item.title}
            item={item}
            activeRoute={activeRoute}
            onClick={() => handleButtonClick(`/${item.url}`)}
          />
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
        sx={{ display: { md: "none" }, padding: "4px" }}
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
            key={item.title}
            onClick={() => handleButtonClick(`/${item.url}`)}
            selected={activeRoute === `/${item.url}`}
            sx={{
              color: (theme) =>
                activeRoute === `/${item.url}` && theme.palette.active,
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Navigation;
