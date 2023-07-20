import { Routes, Route } from "react-router-dom";
import { PageInfoProjects, PageUploadFile } from "../pages";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageUploadFile />} />
      <Route path="/info" element={<PageInfoProjects />} />
    </Routes>
  );
};

export { RoutesMain };
