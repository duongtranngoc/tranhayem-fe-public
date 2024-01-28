import { Box } from "@mui/material";

import { BrowserRouter as Router } from "react-router-dom";

import { contact } from "~/apis/mockData/contact";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import AppRoutes from "./routes/AppRoutes";

import theme from "./theme";

const App = () => {
  return (
    <Router>
      <Header />
      <Box
        component="main"
        sx={{
          minHeight: theme.tranhayemCustom.minHeightMain,
        }}
      >
        <AppRoutes />
      </Box>
      <Footer contact={contact} />
    </Router>
  );
};

export default App;
