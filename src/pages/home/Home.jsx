import Box from "@mui/material/Box";

import StoriesList from "~/components/storiesList/StoriesList";

import Introduce from "./introduce/Introduce";

function Home() {
  return (
    <Box>
      <Introduce />

      <StoriesList />
    </Box>
  );
}

export default Home;
