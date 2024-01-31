import CardActions from "@mui/material/CardActions";
import Pagination from "@mui/material/Pagination";

function PaginationComponent({
  pageCount,
  currentPage,
  handleChange,
  pageSize,
}) {
  const shouldDisplayPagination = pageCount > 1;

  return shouldDisplayPagination ? (
    <CardActions
      spacing={2}
      sx={{
        borderTop: (theme) =>
          `1px solid ${theme.palette.text.primary} !important`,
        justifyContent: "center",
      }}
    >
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size={pageSize}
        siblingCount={0}
      />
    </CardActions>
  ) : null;
}

export default PaginationComponent;
