import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "inherit",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 700,
          mb: 1,
        }}
      >
        404 - Không tìm thấy trang
      </Typography>
      <Typography>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</Typography>
    </Box>
  );
};

export default NotFound;
