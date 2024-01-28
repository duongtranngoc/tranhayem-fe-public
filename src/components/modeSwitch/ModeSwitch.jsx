import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SettingsIcon from "@mui/icons-material/Settings";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { useColorScheme } from "@mui/material/styles";

function ModeSwitch() {
  const { mode, setMode } = useColorScheme();

  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("system");
    } else {
      setMode("light");
    }
  };

  const getModeText = () => {
    if (mode === "light") {
      return "Sáng";
    } else if (mode === "dark") {
      return "Tối";
    } else {
      return "Hệ thống";
    }
  };

  return (
    <Box sx={{ ml: 2 }}>
      <Tooltip
        title={`Nút chuyển đổi chế độ. Chế độ hiện tại: ${getModeText()}`}
      >
        <Button
          onClick={handleModeChange}
          sx={{
            color: (theme) => theme.palette.active,
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            minWidth: 0,
          }}
        >
          {mode === "light" && <LightModeIcon />}
          {mode === "dark" && <NightsStayIcon />}
          {mode === "system" && <SettingsIcon />}
        </Button>
      </Tooltip>
    </Box>
  );
}

export default ModeSwitch;
