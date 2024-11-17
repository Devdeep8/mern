import React, { useState, useEffect } from 'react';
import api from '../services/api';
import AddEmployeeForm from '../components/add-employee-form';

function Dashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    fetchEmployeeCount();
  }, []);

  const fetchEmployeeCount = async () => {
    try {
      const response = await api.get('/employees');
      setEmployeeCount(response.data.length);
    } catch (error) {
      console.error('Error fetching employee count:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Employee Overview</h2>
        <p className="text-gray-600">Total Employees: {employeeCount}</p>
        <AddEmployeeForm />
      </div>
    </div>
  );
}

export default Dashboard;