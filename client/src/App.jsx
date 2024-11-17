import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails';
import AttendanceTracking from './pages/AttendanceTracking';
import LeaveManagement from './pages/LeaveManagement';
// import Payroll from './pages/Payroll';
// import DocumentManagement from './pages/DocumentManagement';
// import TaskManagement from './pages/TaskManagement';
// import Communication from './pages/Communication';
// import PerformanceMetrics from './pages/PerformanceMetrics';
// import Training from './pages/Training';
// import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/attendance" element={<AttendanceTracking />} />
          <Route path="/leave" element={<LeaveManagement />} />
          {/* <Route path="/payroll" element={<Payroll />} />
          <Route path="/documents" element={<DocumentManagement />} />
          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/performance" element={<PerformanceMetrics />} />
          <Route path="/training" element={<Training />} />
          <Route path="/onboarding" element={<Onboarding />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;