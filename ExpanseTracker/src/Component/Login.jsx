import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Login.css"; // Assuming you have this for styling

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://springbasics.onrender.com/api/GetUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to fetch user");

      const userData = await response.json();

      if (userData.password !== password) {
        setError("Incorrect password");
        setLoading(false);
        return;
      }

      localStorage.setItem("userId", userData.userId); // Store userId
      if (typeof onLogin !== "function") {
        console.error("onLogin is not provided or is not a function");
        return;
      }
      
      onLogin(userData.userName);
      
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (err) {
      console.log(err)
      setError("Login failed! Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-box">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
       <p style={{ marginTop: "15px" }}>
        New User Plase {" "}
        <span
          style={{ color: "#4da6ff", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/")}
        >
          Register here
        </span>
      </p>
    </div>
  );
}

export default Login;
