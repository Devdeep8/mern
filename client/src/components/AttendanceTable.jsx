import React from 'react';

function AttendanceTable({ attendanceData }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Employee</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map(employee => (
            employee.attendance.map((record, index) => (
              <tr key={`${employee._id}-${index}`}>
                <td className="px-4 py-2 border">{employee.name}</td>
                <td className="px-4 py-2 border">{new Date(record.date).toLocaleDateString()}</td>
                <td className="px-4 py-2 border">{record.status}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;