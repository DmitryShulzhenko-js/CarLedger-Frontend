import React from "react";

export default function DashboardPage() {
  // Пока статичные данные
  const car = {
    brand: "Audi",
    model: "Q5",
    year: 2013,
    mileage: 97800,
    nextService: "15 марта 2026",
    oilChange: "1 февраля 2026",
    brakePads: "20% износа",
    tirePressure: "32 PSI",
    battery: "Хорошее",
    notes: "Проверить ремень ГРМ на следующем ТО"
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4", minHeight: "100vh" }}>
      {/* Хедер */}
      <header style={{ background: "#1976d2", color: "#fff", padding: "20px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>CarTrack</h1>
        <p>Личный кабинет — информация о вашем авто</p>
      </header>

      {/* Карточка авто */}
      <div style={{
        background: "#fff",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "600px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}>
        <h2>{car.brand} {car.model} ({car.year})</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
          <li><strong>Пробег:</strong> {car.mileage.toLocaleString()} км</li>
          <li><strong>Следующее ТО:</strong> {car.nextService}</li>
          <li><strong>Замена масла:</strong> {car.oilChange}</li>
          <li><strong>Тормозные колодки:</strong> {car.brakePads}</li>
          <li><strong>Давление в шинах:</strong> {car.tirePressure}</li>
          <li><strong>Состояние батареи:</strong> {car.battery}</li>
          <li><strong>Заметки:</strong> {car.notes}</li>
        </ul>
      </div>

      {/* Дополнительные блоки */}
      <div style={{
        background: "#fff",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "600px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}>
        <h3>Напоминания</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
          <li>Проверить тормоза до 15 марта 2026</li>
          <li>Поменять масло до 1 февраля 2026</li>
          <li>Проверить давление в шинах каждую неделю</li>
        </ul>
      </div>
    </div>
  );
}