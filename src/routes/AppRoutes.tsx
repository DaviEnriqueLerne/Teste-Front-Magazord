import { Route, Routes } from "react-router-dom";
import { ProfileRepositoriesController } from "../pages/ProfileRepositories/controller/index.controller";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileRepositoriesController />} />
    </Routes>
  );
}
