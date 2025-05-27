import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const userId = localStorage.getItem("userId"); // Get stored user ID
  const navigate = useNavigate();


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
      console.log("Fetched data:", data);
      if (Array.isArray(data)) {
        setTransactions((prev) => [...prev, ...data]);
      } else {
        setTransactions((prev) => [...prev, data]); 
      }
      setHasMore(false); // Optional, depending on your pagination logic
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
          <button onClick={() => navigate('/dashboard')}>Home</button>
          <button>Account</button>
          <button>Category</button>
          <button>Budget</button>
          <button>Friend</button>
          <button onClick={() => navigate('/addTransaction')}>Transaction</button>
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
