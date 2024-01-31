import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import NewStories from "./newStories/NewStories";
import NewStoriesCompleted from "./newStoriesCompleted/NewStoriesCompleted";

function StoriesList() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <NewStories />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NewStoriesCompleted />
        </Grid>
      </Grid>
    </Container>
  );
}

export default StoriesList;
