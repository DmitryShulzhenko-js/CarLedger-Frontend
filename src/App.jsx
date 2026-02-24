import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./app/AuthProvider";
import PrivateRoute from "./app/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
