import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import StoriesList from "~/components/storiesList/StoriesList";

function Stories() {
  return (
    <Box>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="textPrimary">Đọc truyện</Typography>
          <Typography color="textPrimary"></Typography>
        </Breadcrumbs>

        <TextField id="search" label="Từ khóa" />
      </Container>

      <StoriesList />
    </Box>
  );
}

export default Stories;
