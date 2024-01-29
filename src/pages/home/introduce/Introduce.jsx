import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { introduce } from "~/apis/mockData/introduce";

import { waveAnimation } from "~/assets/animation/waveAnimation";

import { REAL_NAME } from "~/utils/constant";

import Profession from "./profession/Profession";

import homeLogo from "/images/amico.png";

function Introduce() {
  return (
    <Container sx={{ position: "relative", py: 5 }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={homeLogo}
            alt="Ảnh phần giới thiệu"
            sx={{ maxWidth: { xs: "60%", sm: "80%" }, height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: { xs: "flex", sm: "block" },
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "24px", sm: "32px" },
            }}
          >
            Xin chào mọi người!{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                transformOrigin: "70% 70%",
                animation: `${waveAnimation} 2s infinite`,
              }}
            >
              👋🏻
            </Box>
          </Typography>
          <Typography sx={{ mb: 4, fontSize: { xs: "24px", sm: "32px" } }}>
            Mình là{" "}
            <Box component="strong">
              {introduce.realName ? introduce.realName : REAL_NAME}
            </Box>
          </Typography>
          <Profession jobTitle={introduce.jobTitle} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduce;
