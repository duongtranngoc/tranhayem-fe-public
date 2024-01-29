import { grey, red, yellow } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const HEADER_HEIGHT = "52px";
const MIN_HEIGHT_FOOTER = "80px";
const MIN_HEIGHT_MAIN = `calc(100vh - ${HEADER_HEIGHT} - ${MIN_HEIGHT_FOOTER} - 2px)`;

const theme = extendTheme({
  tranhayemCustom: {
    headerHeight: HEADER_HEIGHT,
    minHeightFooter: MIN_HEIGHT_FOOTER,
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
      footer: {
        backgroundColor: yellow[200],
      },
    },

    dark: {
      palette: {
        active: yellow[200],
        background: {
          default: "#000",
        },
        primary: {
          main: grey[900],
        },
        AppBar: {
          darkBg: "#000",
        },
      },
      footer: {
        backgroundColor: grey[900],
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

    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1000px !important",
        },
      },
    },
  },
});

export default theme;
