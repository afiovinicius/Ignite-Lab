import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Platform } from "../pages/Platform";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found-page" element={<NotFound />} />
    </Routes>
  );
}
