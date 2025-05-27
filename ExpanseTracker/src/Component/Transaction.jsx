import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./Transaction.css";

function Transaction() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    userId: "",
    accountID: "",
    categoryID: "",
    amount: "",
    transaction_date: "",
    description: "",
  });

  // Fetch Users
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

  // Fetch Accounts (when user changes)
  useEffect(() => {
    if (!formData.userId) return;
    const fetchAccounts = async () => {
      try {
        const res = await fetch(`https://springbasics.onrender.com/api/Accounts/user/${formData.userId}`);
        const data = await res.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };
    fetchAccounts();
  }, [formData.userId]);

  // Fetch Categories (when user changes)
  useEffect(() => {
    if (!formData.userId) return;
    const fetchCategories = async () => {
      try {
        const res = await fetch(`https://springbasics.onrender.com/categories/getCategories/${formData.userId}`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [formData.userId]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload
    const payload = {
      users: {
        userId: parseInt(formData.userId),
      },
      accounts: {
        accountID: parseInt(formData.accountID),
      },
      categories: {
        categoryID: parseInt(formData.categoryID),
      },
      amount: parseFloat(formData.amount),
      transaction_date: formData.transaction_date,
      description: formData.description,
    };

    try {
      const res = await fetch("https://springbasics.onrender.com/api/AddTransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add transaction");
      const data = await res.json();
      console.log("Transaction added:", data);
      alert("Transaction added successfully!");
      navigate("/dashboard"); // Redirect to dashboard after success
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed to add transaction.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h1>Transaction</h1>
        <div className="navbar-buttons">
          <button onClick={() => navigate('/dashboard')}>Home</button>
          <button>Account</button>
          <button>Category</button>
          <button>Budget</button>
          <button>Friend</button>
          <button onClick={() => navigate('/addTransaction')}>Transaction</button>
        </div>
      </div>

      {/* Transaction Form */}
      <div className="form-container">
        <h2>Add New Transaction</h2>
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

          {/* Account Dropdown */}
          <label>
            Select Account:
            <select name="accountID" value={formData.accountID} onChange={handleChange} required>
              <option value="">Select Account</option>
              {accounts.map((account) => (
                <option key={account.accountID} value={account.accountID}>
                  {account.accountName}
                </option>
              ))}
            </select>
          </label>

          {/* Category Dropdown */}
          <label>
            Select Category:
            <select name="categoryID" value={formData.categoryID} onChange={handleChange} required>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.categoryID} value={category.categoryID}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </label>

          {/* Amount */}
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
            />
          </label>

          {/* Transaction Date */}
          <label>
            Transaction Date:
            <input
              type="date"
              name="transaction_date"
              value={formData.transaction_date}
              onChange={handleChange}
              required
            />
          </label>

          {/* Description */}
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </>
  );
}

export default Transaction;
