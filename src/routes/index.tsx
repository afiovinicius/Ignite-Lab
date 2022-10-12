import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Platform } from "../pages/Platform";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} errorElement={<Error />} />
        <Route
          path="/platform"
          element={<Platform />}
          errorElement={<Error />}
        />
        <Route path="/not-found-page*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
