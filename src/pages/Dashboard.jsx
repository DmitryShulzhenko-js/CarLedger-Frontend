import { useState } from "react";

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false);

  const startDemo = () => {
    setShowDemo(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4", minHeight: "100vh" }}>
      <header style={{ background: "#1976d2", color: "#fff", padding: "20px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>CarTrack</h1>
        <p>Все данные о твоей машине в одном месте</p>
      </header>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button 
          style={{ padding: "10px 20px", margin: "0 10px", fontSize: "16px", cursor: "pointer" }}
          onClick={() => window.location.href="/login"}
        >
          Войти / Зарегистрироваться
        </button>
        <button 
          style={{ padding: "10px 20px", margin: "0 10px", fontSize: "16px", cursor: "pointer" }}
          onClick={startDemo}
        >
          Попробовать демо
        </button>
      </div>

      {showDemo && (
        <div style={{
          background: "#fff",
          margin: "20px auto",
          padding: "20px",
          maxWidth: "600px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h2>Демо: Honda Accord 2003</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Пробег: 120,000 км</li>
            <li>Следующее ТО: 15 марта 2026</li>
            <li>Замена масла: 1 февраля 2026</li>
            <li>Тормозные колодки: 20% износа</li>
            <li>Давление в шинах: 32 PSI</li>
          </ul>
        </div>
      )}
    </div>
  );
}