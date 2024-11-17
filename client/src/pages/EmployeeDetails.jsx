import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEmployeeDetails();
  }, [id]);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await api.get(`/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error('Error fetching employee details:', error);
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{employee.name}</h2>
        <p className="text-gray-600 mb-2">Position: {employee.position}</p>
        <p className="text-gray-600 mb-2">Department: {employee.department}</p>
        <p className="text-gray-600 mb-2">Email: {employee.email}</p>
        <p className="text-gray-600 mb-2">Hire Date: {new Date(employee.hireDate).toLocaleDateString()}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          {employee.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmployeeDetails;