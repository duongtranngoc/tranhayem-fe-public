/* eslint-disable indent */
import { Route, Routes } from "react-router-dom";

import { MENU_ITEMS_DISPLAY } from "~/config/menuConfig";

import NotFound from "~/pages/NotFound";
import About from "~/pages/about/About";
import Home from "~/pages/home/Home";
import Projects from "~/pages/projects/Projects";
import Resume from "~/pages/resume/Resume";
import Stories from "~/pages/stories/Stories";

const AppRoutes = () => {
  return (
    <Routes>
      {MENU_ITEMS_DISPLAY.map((item) => (
        <Route
          key={item.url}
          path={item.url}
          element={getElement(item.title)}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const getElement = (title) => {
  switch (title) {
    case "Trang chủ":
      return <Home />;
    case "Đọc truyện":
      return <Stories />;
    case "Về tác giả":
      return <About />;
    case "Các dự án":
      return <Projects />;
    case "Bản tóm tắt":
      return <Resume />;
    default:
      return <Home />;
  }
};

export default AppRoutes;
