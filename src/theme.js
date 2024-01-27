import { yellow } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  palette: {},
  tranhayemCustom: {
    active: yellow[200],
  },
});

export default theme;
