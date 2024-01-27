import { Route, Routes } from "react-router-dom";

import About from "~/pages/about/About";
import Home from "~/pages/home/Home";
import Posts from "~/pages/posts/Posts";
import Projects from "~/pages/projects/Projects";
import Resume from "~/pages/resume/Resume";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-the-author" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AppRoutes;
