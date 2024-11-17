import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function LeaveRequestForm({ employees, onSubmit }) {
  const [employeeId, setEmployeeId] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [type, setType] = useState('annual');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ employeeId, startDate, endDate, reason, type });
    setEmployeeId('');
    setStartDate(new Date());
    setEndDate(new Date());
    setReason('');
    setType('annual');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="border rounded p-2"
          required
        >
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee._id} value={employee._id}>{employee.name}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded p-2"
        >
          <option value="annual">Annual Leave</option>
          <option value="sick">Sick Leave</option>
          <option value="personal">Personal Leave</option>
        </select>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="border rounded p-2 w-full"
          required
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="border rounded p-2 w-full"
          required
        />
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for leave"
          className="border rounded p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit Leave Request</button>
      </div>
    </form>
  );
}

export default LeaveRequestForm;