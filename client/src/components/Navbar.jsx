import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/leave">Leave</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/communication">Communication</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/onboarding">Onboarding</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;