import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Transaction from "./Component/Transaction";
import Register from "./Component/Registration";
import CreateAccount from "./Component/Account";
import CreateCategory from "./Component/Category";
import "./Dashboard.css";

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
        <Route path="/addAccount" element={<CreateAccount/>}/>
        <Route path="/addCategory" element={<CreateCategory/>}/>
        <Route path="/" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
