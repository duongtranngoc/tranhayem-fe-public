import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import AppRoutes from "./routes/AppRoutes";

import theme from "./theme";

const App = () => {
  return (
    <Router>
      <Header />
      <main
        style={{
          minHeight: theme.tranhayemCustom.minHeightMain,
        }}
      >
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
