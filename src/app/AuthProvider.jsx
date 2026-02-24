import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {

  console.log('зашло в функцию AuthProvider.jsx')


  const [user, setUser] = useState(null);

  // login будет вызываться после успешного fetch
  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    console.log('зашло в функцию logout в файле AuthProvider.jsx')
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

