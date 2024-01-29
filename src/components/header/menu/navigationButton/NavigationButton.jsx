import Button from "@mui/material/Button";

function NavigationButton({ item, activeRoute, onClick }) {
  const isActive = activeRoute === `/${item.url}`;

  return (
    <Button
      onClick={onClick}
      sx={{
        color: (theme) => (isActive ? theme.palette.active : "inherit"),
        width: 120,
        position: "relative",
        "&:hover": {
          color: (theme) => theme.palette.active,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: 4,
          borderRadius: "4px",
          transition: "width 0.4s ease",
          backgroundColor: (theme) => theme.palette.active,
        },
        "&:hover::after": {
          width: "100%",
        },
      }}
    >
      {item.title}
    </Button>
  );
}

export default NavigationButton;
