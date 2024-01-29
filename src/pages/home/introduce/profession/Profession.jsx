import Typography from "@mui/material/Typography";

import Typewriter from "typewriter-effect";

import { MAIN_JOB } from "~/utils/constant";

function Profession({ jobTitle }) {
  if (!jobTitle || jobTitle.length === 0) {
    jobTitle = [MAIN_JOB];
  }

  return (
    <Typography
      sx={{
        fontSize: {
          xs: "20px",
          sm: "28px",
        },
        fontWeight: "bold",
      }}
    >
      <Typewriter
        options={{
          strings: jobTitle,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Typography>
  );
}

export default Profession;
