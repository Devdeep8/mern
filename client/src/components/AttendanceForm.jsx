import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AttendanceForm({ employees, onSubmit }) {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [status, setStatus] = useState('present');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      employeeId: selectedEmployee,
      date: selectedDate,
      status: status
    });
    setSelectedEmployee('');
    setSelectedDate(new Date());
    setStatus('present');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          className="border rounded p-2"
          required
        >
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee._id} value={employee._id}>{employee.name}</option>
          ))}
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border rounded p-2"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-2"
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Mark Attendance</button>
      </div>
    </form>
  );
}

export default AttendanceForm;