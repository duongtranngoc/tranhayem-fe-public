import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
        <MenuItem
          onClick={() => handleButtonClick("/")}
          selected={activeRoute === "/"}
        >
          Trang chủ
        </MenuItem>
        <MenuItem
          onClick={() => handleButtonClick("/posts")}
          selected={activeRoute === "/posts"}
        >
          Đọc truyện
        </MenuItem>
        <MenuItem
          onClick={() => handleButtonClick("/about")}
          selected={activeRoute === "/about"}
        >
          Về tôi
        </MenuItem>
        <MenuItem
          onClick={() => handleButtonClick("/project")}
          selected={activeRoute === "/project"}
        >
          Các dự án
        </MenuItem>
      </Menu>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Button
          color="inherit"
          onClick={() => handleButtonClick("/")}
          sx={{ color: activeRoute === "/" && "primary.main" }}
        >
          Trang chủ
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick("/posts")}
          sx={{ color: activeRoute === "/posts" && "primary.main" }}
        >
          Đọc truyện
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick("/about")}
          sx={{ color: activeRoute === "/about" && "primary.main" }}
        >
          Về tác giả
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick("/project")}
          sx={{ color: activeRoute === "/project" && "primary.main" }}
        >
          Các dự án
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick("/resume")}
          sx={{ color: activeRoute === "/resume" && "primary.main" }}
        >
          Tóm tắt
        </Button>
      </Box>
    </Box>
  );
}

export default Navigation;
