import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css";


function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [smsInput, setSmsInput] = useState("");
  const [parsedTransactions, setParsedTransactions] = useState([]);

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

  const handleParseSms = () => {
    const regex = /INR\s(?<amount>\d+\.\d{2})\s(?<type>debited|credited)\s*A\/c no\. (?<account>XX\d+)\s*(?<date>\d{2}-\d{2}-\d{2}),\s*(?<time>\d{2}:\d{2}:\d{2})[\s\S]*?\/(?<merchant>[A-Za-z0-9]+)/;
    const lines = smsInput.split("\n");
    const result = [];
    console.log("hey you are in handleParseSms");

    lines.forEach((line) => {
      const match = line.match(/(?:debited|credited)/i);
      const amountMatch = line.match(/INR\s?([\d,]+\.\d{2})/i);
      if (match && amountMatch) {
        result.push({
          amount: parseFloat(amountMatch[1].replace(",", "")),
          type: match[0],
          raw: line
        });
      }
    });
    console.log(result)
    setParsedTransactions(result);
  };

  return (
    <>
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

      <div className="sms-input-section">
        <h2>Paste Google Pay SMS</h2>
        <div className="sms-input-wrapper">
          <textarea
            className="sms-textarea"
            placeholder="Paste your GPay transaction SMS here..."
            value={smsInput}
            onChange={(e) => setSmsInput(e.target.value)}
          />
          <button className="parse-btn" onClick={handleParseSms}>Parse SMS</button>
        </div>

        {/* Show parsed results */}
        <div className="parsed-results">
          {parsedTransactions.map((tx, index) => (
            <div key={index} className="transaction-item">
              <p><strong>Amount:</strong> ₹{tx.amount}</p>
              <p><strong>Type:</strong> {tx.type}</p>
              <p><strong>Message:</strong> {tx.raw}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
