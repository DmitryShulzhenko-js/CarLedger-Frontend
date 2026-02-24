import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    console.log('!user frontend PrivateRoute.jsx')
    return <Navigate to="/login" replace />;
  }

  return children;
}
