// useAuth.js
import { useState, useEffect } from "react";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = parseJwt(token);
      if (decoded) {
        setUser({ id: decoded.id, username: decoded.username });
      } else {
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  return { user, loading };
}