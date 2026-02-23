import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../app/useAuth.js";

export default function PrivateLayout() {
  const { logout } = useAuth();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        background: "#1e1e2f",
        color: "#fff",
        padding: "20px"
      }}>
        <h3>CarKeeper</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
          <Link to="/cars" style={{ color: "#fff" }}>Мои авто</Link>
          <Link to="/settings" style={{ color: "#fff" }}>Настройки</Link>
        </nav>
      </aside>

      {/* Основная зона */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Верхняя панель */}
        <header style={{
          padding: "15px 30px",
          display: "flex",
          justifyContent: "flex-end",
          borderBottom: "1px solid #eee"
        }}>
          <button onClick={logout}>Выйти</button>
        </header>

        {/* Контент страницы */}
        <main style={{ padding: "30px", flex: 1 }}>
          <Outlet />
        </main>

      </div>
    </div>
  );
}
