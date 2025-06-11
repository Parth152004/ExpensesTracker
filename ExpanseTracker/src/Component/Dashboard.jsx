import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
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
    setTransactions(Array.isArray(data) ? data : [data]);
    setHasMore(false);
  } catch (error) {
    console.error("Error fetching transactions:", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="dashboard-container">
      <Navbar title="Dashboard" />

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
            </div>
          ))
        )}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Dashboard;
