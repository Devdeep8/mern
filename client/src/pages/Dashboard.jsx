import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
    department: "",
    salary: "",
  });

  // Fetch employees from the API
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees", {
        headers: {
          "x-auth-token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjY3MzhjN2RhODQ0MjgzZTdjNGMzZTIxZiJ9LCJpYXQiOjE3MzE3NzQ0MjcsImV4cCI6MTczMTc3ODAyN30.-1VVC5vU9Gz9fcs8C3zbTA2Ym2_qK1xcyoZSPJvpecg"
        }
      });
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch employees!");
    }
  };
  

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/employees/register",
        formData
      );
      toast.success("Employee registered successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        position: "",
        department: "",
        salary: "",
      });

      fetchEmployees(); // Refresh employee list
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Registration failed!");
    }
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>Register Employee</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>

      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} - {employee.department}
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
