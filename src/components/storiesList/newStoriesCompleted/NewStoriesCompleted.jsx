import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useEffect, useState } from "react";

import { newStoriesCompletedData } from "~/apis/mockData/newStoriesCompletedData";

import PaginationComponent from "~/components/pagination/PaginationComponent";

function NewStoriesCompleted() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState("small");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const itemsPerPage = 4;

  useEffect(() => {
    setPageSize(isSmallScreen ? "small" : "medium");
  }, [isSmallScreen]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = newStoriesCompletedData.slice(startIndex, endIndex);

  return (
    <Card
      sx={{
        borderRadius: "8px",
      }}
    >
      <CardHeader title="Truyện mới hoàn thành" />
      {displayedData.length === 0 ? (
        <CardContent>
          <Typography>Hiện tại chưa có truyện đã hoàn thành</Typography>
        </CardContent>
      ) : (
        displayedData.map((story, index) => (
          <Box key={index} sx={{}}>
            <Card
              sx={{
                borderRadius: 0,
                borderTop: (theme) =>
                  `1px solid ${theme.palette.text.primary} !important`,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={story.storyImage}
                        alt={story.storyName}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6" gutterBottom>
                        {story.storyName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        Mô tả: {story.storyDescription}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        Tác giả: {story.storyAuthor}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        Thể loại: {story.storyType.join(", ")}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        Tổng chương: {story.totalChapter} chương
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))
      )}
      {displayedData.length > 0 && (
        <PaginationComponent
          pageCount={Math.ceil(newStoriesCompletedData.length / itemsPerPage)}
          currentPage={page}
          handleChange={handleChange}
          pageSize={pageSize}
        />
      )}
    </Card>
  );
}

export default NewStoriesCompleted;
