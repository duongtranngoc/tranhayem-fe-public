import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useEffect, useState } from "react";

import { newStoriesData } from "~/apis/mockData/newStoriesData";

import PaginationComponent from "~/components/pagination/PaginationComponent";

import { timeDifference } from "~/utils/formatters";

function NewStories() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState("small");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const itemsPerPage = 8;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setPageSize(isSmallScreen ? "small" : "medium");
  }, [isSmallScreen]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = newStoriesData.slice(startIndex, endIndex);

  return (
    <Card sx={{ borderRadius: "8px" }}>
      <CardHeader title="Truyện mới cập nhật" />
      {displayedData.length === 0 ? (
        <CardContent>
          <Typography>Hiện tại không có truyện mới cập nhật</Typography>
        </CardContent>
      ) : (
        displayedData.map((story, index) => (
          <Box key={index}>
            <Card
              sx={{
                borderRadius: 0,
                borderTop: (theme) =>
                  `1px solid ${theme.palette.text.primary} !important`,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {story.storyName}
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={8}>
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
                        {story.storyChapter}
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
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                        Thể loại: {story.storyType.slice(0, 2).join(", ")}
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
                        Cập nhật:{" "}
                        {timeDifference(currentDateTime, story.updatedAt)} trước
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
          pageCount={Math.ceil(newStoriesData.length / itemsPerPage)}
          currentPage={currentPage}
          handleChange={handlePageChange}
          pageSize={pageSize}
        />
      )}
    </Card>
  );
}

export default NewStories;
