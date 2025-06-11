import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Transaction from "./Component/Transaction";
import Register from "./Component/Registration";

function App() {
  const [userName, setUserName] = useState("");

  const handleLogin = (name) => {
    setUserName(name); // Store username in state
  };

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard userName={userName} />} />
        <Route path="/addTransaction" element={<Transaction/>}/>
        <Route path="/" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
