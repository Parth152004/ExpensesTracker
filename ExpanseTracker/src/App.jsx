import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Transaction from "./Component/Transaction";

function App() {
  const [userName, setUserName] = useState("");

  const handleLogin = (name) => {
    setUserName(name); // Store username in state
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard userName={userName} />} />
        <Route path="/addTransaction" element={<Transaction/>}/>
      </Routes>
    </Router>
  );
}

export default App;
