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
      components: {
        body: {
          backgroundColor: yellow[200],
        },
        active: red[900],
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: yellow[500],
              color: grey[900],
              "& .MuiToolbar-root": {
                minHeight: HEADER_HEIGHT,
              },
            },
          },
        },
      },
    },
    dark: {
      components: {
        active: yellow[200],
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: grey[900],
              "& .MuiToolbar-root": {
                minHeight: HEADER_HEIGHT,
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
