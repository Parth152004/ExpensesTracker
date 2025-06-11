import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css";
import "./Transaction.css"; // Using the same styles

function CreateAccount() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    userId: "",
    accountName: "",
    accountType: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://springbasics.onrender.com/api/GetUser");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      users: {
        userId: parseInt(formData.userId),
      },
      accountName: formData.accountName,
      accountType: formData.accountType,
    };

    try {
      const res = await fetch("https://springbasics.onrender.com/api/CreateAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create account");

      const data = await res.json();
      console.log("Account created:", data);
      alert("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account.");
    }
  };

  return (
    <>
      <Navbar title="Dashboard" />
      {/* Account Form */}
      <div className="form-container">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit} className="transaction-form">
          {/* User Dropdown */}
          <label>
            Select User:
            <select name="userId" value={formData.userId} onChange={handleChange} required>
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.userId} value={user.userId}>
                  {user.userName}
                </option>
              ))}
            </select>
          </label>

          {/* Account Name */}
          <label>
            Account Name:
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              required
            />
          </label>

          {/* Account Type */}
          <label>
            Account Type:
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Saving">Saving</option>
              <option value="Current">Current</option>
              <option value="Credit">Credit</option>
              <option value="Cash">Cash</option>
            </select>
          </label>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
