import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const userId = localStorage.getItem("userId"); // Get stored user ID

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    if (!userId) return;
    setLoading(true);

    try {
      const response = await fetch(`https://springbasics.onrender.com/api/getTransaction/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch transactions");

      const data = await response.json();
      setTransactions((prev) => [...prev, data]); // Append new transactions
      setHasMore(false); // Assuming API returns all transactions at once

    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        <h1>Dashboard</h1>
        <div className="navbar-buttons">
          <button>Add Account</button>
          <button>Add Category</button>
          <button>Add Budget</button>
          <button>Add Friend</button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="transaction-list">
        {transactions.length === 0 && !loading ? (
          <p>No transactions found.</p>
        ) : (
          transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <p><strong>Amount:</strong> ₹{transaction.amount}</p>
              <p><strong>Description:</strong> {transaction.description}</p>
              <p><strong>Date:</strong> {transaction.transaction_date}</p>
              {/* <p><strong>Category ID:</strong> {transaction.categories.categoryID}</p>
              <p><strong>Account ID:</strong> {transaction.accounts.accountID}</p> */}
            </div>
          ))
        )}
        
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Dashboard;
