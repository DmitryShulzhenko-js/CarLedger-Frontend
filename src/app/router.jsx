import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import PrivateRoute from "./PrivateRoute";

//import HomePage from "../pages/public/HomePage";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public zone */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        {/* Private zone */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}
