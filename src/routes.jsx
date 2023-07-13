import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

import MainPage from "./pages/MainPages";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:login/repositories" element={<RepositoriesPage />}/>
    </Routes>
  );
}
