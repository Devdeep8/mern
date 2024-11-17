import React, { useState, useEffect } from 'react';
import api from '../services/api';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceTable from '../components/AttendanceTable';

function AttendanceTracking() {
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchEmployees();
    fetchAttendance();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchAttendance = async () => {
    try {
      const response = await api.get('/attendance');
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    }
  };

  const handleAttendanceSubmit = async (data) => {
    try {
      await api.post('/attendance', data);
      fetchAttendance();
    } catch (error) {
      console.error('Error submitting attendance:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Tracking</h1>
      <AttendanceForm employees={employees} onSubmit={handleAttendanceSubmit} />
      <AttendanceTable attendanceData={attendanceData} />
    </div>
  );
}

export default AttendanceTracking;