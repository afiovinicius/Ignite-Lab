import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Platform } from "../pages/Platform";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} errorElement={<NotFound />} />
      <Route
        path="/platform"
        element={<Platform />}
        errorElement={<NotFound />}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found-page" element={<NotFound />} />
    </Routes>
  );
}
