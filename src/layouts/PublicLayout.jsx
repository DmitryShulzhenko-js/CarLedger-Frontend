import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {

  console.log('зашло в PublicLayout()')

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <header style={{
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}>
        <h2>CarKeeper</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Главная</Link>
          <Link to="/login">Войти</Link>
          <Link to="/register">Регистрация</Link>
          <Link to="/settings">Настройки</Link>
        </nav>
      </header>

      {/* Контент страницы */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{
        padding: "20px",
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        © 2026 CarKeeper
      </footer>

    </div>
  );
}
