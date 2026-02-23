import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../app/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        login(username);          // обновляем контекст
        navigate("/dashboard");   // редирект на защищённый роут
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Ошибка сервера");
      console.log(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Логин</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={styles.button}>Войти</button>
      </form>
    </div>
  );
}

// Простейшие inline-стили
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "320px",
    margin: "50px auto",
    textAlign: "center"
  },
  form: { display: "flex", flexDirection: "column" },
  formGroup: { marginBottom: "15px", textAlign: "left" },
  input: { 
    width: "100%", 
    padding: "8px", 
    borderRadius: "4px", 
    border: "1px solid #ccc" 
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#2d6cdf",
    color: "white",
    fontSize: "15px",
    cursor: "pointer"
  }
};
