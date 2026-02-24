import { useState } from "react";

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f6f8fb", color: "#1a1a1a" }}>
      
      {/* ===== HEADER ===== */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ margin: 0 }}>CarKeeper</h2>

        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#features" style={{ textDecoration: "none", color: "#333" }}>Возможности</a>
          <a href="#how" style={{ textDecoration: "none", color: "#333" }}>Как работает</a>
          <a href="#pricing" style={{ textDecoration: "none", color: "#333" }}>Тарифы</a>

          <button
            onClick={() => window.location.href = "/login"}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #1976d2",
              background: "transparent",
              cursor: "pointer"
            }}
          >
            Войти
          </button>

          <button
            onClick={() => window.location.href = "/register"}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#1976d2",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Зарегистрироваться
          </button>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        padding: "80px 60px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Управляй своей машиной профессионально
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 40px" }}>
          Храни историю обслуживания, получай напоминания о ТО, отслеживай расходы и управляй всеми автомобилями в одном месте.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            onClick={() => setShowDemo(true)}
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              background: "#1976d2",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Попробовать демо
          </button>

          <button
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #1976d2",
              background: "transparent",
              cursor: "pointer"
            }}
          >
            Подробнее
          </button>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" style={{ padding: "60px", background: "#ffffff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Возможности</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}>
          {[
            "История всех ремонтов и замен",
            "Напоминания по пробегу и датам",
            "Учёт расходов на автомобиль",
            "Поддержка нескольких автомобилей",
            "Импорт данных по VIN",
            "Аналитика затрат по месяцам"
          ].map((item, index) => (
            <div key={index} style={{
              padding: "20px",
              borderRadius: "10px",
              background: "#f4f7fc",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DEMO DASHBOARD ===== */}
      {showDemo && (
        <section style={{ padding: "60px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Демо панели управления
          </h2>

          <div style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <h3>BMW 320i (2018)</h3>
            <p>Пробег: 86 420 км</p>
            <p>Следующее ТО: через 1 200 км</p>

            <hr />

            <h4>Последние записи</h4>
            <ul>
              <li>Замена масла — 12.01.2026</li>
              <li>Тормозные колодки — 03.11.2025</li>
              <li>Замена фильтров — 10.09.2025</li>
            </ul>

            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                background: "#1976d2",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Добавить запись
            </button>
          </div>
        </section>
      )}

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" style={{ padding: "60px", background: "#f4f7fc" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Как это работает</h2>

        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "40px"
        }}>
          <div>
            <h4>1. Добавь автомобиль</h4>
            <p>Введи VIN или данные вручную.</p>
          </div>
          <div>
            <h4>2. Вноси обслуживание</h4>
            <p>Фиксируй замены и ремонты.</p>
          </div>
          <div>
            <h4>3. Получай напоминания</h4>
            <p>Не пропускай важные ТО.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        padding: "80px",
        textAlign: "center",
        background: "#1976d2",
        color: "#fff"
      }}>
        <h2>Начни управлять своим авто уже сегодня</h2>
        <button
          onClick={() => window.location.href = "/register"}
          style={{
            marginTop: "20px",
            padding: "14px 28px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#1976d2",
            cursor: "pointer"
          }}
        >
          Создать аккаунт
        </button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: "30px",
        textAlign: "center",
        background: "#111",
        color: "#ccc"
      }}>
        <p>© 2026 CarKeeper. Все права защищены.</p>
      </footer>

    </div>
  );
}
