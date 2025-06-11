import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css";
import "./Transaction.css"; // Reusing same styles

function CreateCategory() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    categoryType: "",
  });

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
        userId: parseInt(localStorage.getItem("userId")),
      },
      categoryName: formData.categoryName,
      categoryType: formData.categoryType,
    };

    try {
      const res = await fetch("https://springbasics.onrender.com/categories/createCategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create category");

      const data = await res.json();
      console.log("Category created:", data);
      alert("Category created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category.");
    }
  };

  return (
    <>
      <Navbar title="Dashboard" />
      {/* Category Form */}
      <div className="form-container">
        <h2>Add New Category</h2>
        <form onSubmit={handleSubmit} className="transaction-form">
          {/* Category Name */}
          <label>
            Category Name:
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              required
            />
          </label>

          {/* Category Type */}
          <label>
            Category Type:
            <select
              name="categoryType"
              value={formData.categoryType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Expanse">Expanse</option>
              <option value="Income">Income</option>
            </select>
          </label>

          <button type="submit">Create Category</button>
        </form>
      </div>
    </>
  );
}

export default CreateCategory;
