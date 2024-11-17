import React, { useState, useEffect } from 'react';
import api from '../services/api';
import LeaveRequestForm from '../components/LeaveRequestForm';
import LeaveRequestTable from '../components/LeaveRequestTable';

function LeaveManagement() {
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchEmployees();
    fetchLeaveRequests();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchLeaveRequests = async () => {
    try {
      const response = await api.get('/leave');
      setLeaveRequests(response.data);
    } catch (error) {
      console.error('Error fetching leave requests:', error);
    }
  };

  const handleLeaveSubmit = async (data) => {
    try {
      await api.post('/leave', data);
      fetchLeaveRequests();
    } catch (error) {
      console.error('Error submitting leave request:', error);
    }
  };

  const handleLeaveStatusUpdate = async (id, status) => {
    try {
      await api.put(`/leave/${id}`, { status });
      fetchLeaveRequests();
    } catch (error) {
      console.error('Error updating leave status:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leave Management</h1>
      <LeaveRequestForm employees={employees} onSubmit={handleLeaveSubmit} />
      <LeaveRequestTable leaveRequests={leaveRequests} onStatusUpdate={handleLeaveStatusUpdate} />
    </div>
  );
}

export default LeaveManagement;