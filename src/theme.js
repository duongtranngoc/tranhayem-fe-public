import { grey, red, yellow } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const HEADER_HEIGHT = "52px";
const FOOTER_HEIGHT = "52px";
const MIN_HEIGHT_MAIN = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`;

const theme = extendTheme({
  tranhayemCustom: {
    headerHeight: HEADER_HEIGHT,
    footerHeight: FOOTER_HEIGHT,
    minHeightMain: MIN_HEIGHT_MAIN,
  },

  colorSchemes: {
    light: {
      palette: {
        active: red.A700,
        background: {
          default: yellow[100],
        },
        primary: {
          main: yellow[200],
        },
      },
    },

    dark: {
      palette: {
        active: yellow[200],
        background: {
          default: grey[900],
        },
        primary: {
          main: yellow[500],
          AppBar: {
            darkBg: red[400],
          },
        },
      },
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          "& .MuiToolbar-root": {
            minHeight: HEADER_HEIGHT,
          },
        },
      },
    },
  },
});

export default theme;
