import React from 'react';

function EmployeeCard({ employee }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{employee.name}</h2>
      <p className="text-gray-600">{employee.position}</p>
      <p className="text-gray-600">{employee.department}</p>
    </div>
  );
}

export default EmployeeCard;