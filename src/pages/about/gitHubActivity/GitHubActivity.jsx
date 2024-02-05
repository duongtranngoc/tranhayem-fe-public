import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import ActivityCalendar from "react-github-calendar";

function GitHubActivity() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("vi-VN");
    return formattedDate;
  };

  return (
    <Container>
      <Typography
        align="center"
        gutterBottom
        variant="h2"
        sx={{ paddingBottom: "20px" }}
      >
        Hoạt động trên GitHub
      </Typography>
      <ActivityCalendar
        username="duongtranngoc"
        blockSize={15}
        blockMargin={4}
        fontSize={16}
        labels={{
          months: [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ],
          weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          totalCount: "{{count}} hoạt động trong {{year}}",
          legend: {
            less: "Ít",
            more: "Nhiều",
          },
        }}
        showWeekdayLabels={true}
        renderBlock={(block, activity) => (
          <Tooltip
            title={`${activity.count} hoạt động vào ${formatDate(
              activity.date
            )}`}
          >
            {block}
          </Tooltip>
        )}
      />
    </Container>
  );
}

export default GitHubActivity;
