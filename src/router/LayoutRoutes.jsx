import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import { router } from "./Router";

const LayoutRoutes = () => {
  return (
    <Router>
      <Routes>
        {router.map((index) => {
          return (
            <Route
              key={index.path}
              path={index.path}
              element={<index.components />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default LayoutRoutes;
