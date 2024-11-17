import React from 'react';

function LeaveRequestTable({ leaveRequests, onStatusUpdate }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Employee</th>
            <th className="px-4 py-2 border">Start Date</th>
            <th className="px-4 py-2 border">End Date</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Reason</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(leave => (
            <tr key={leave._id}>
              <td className="px-4 py-2 border">{leave.employee.name}</td>
              <td className="px-4 py-2 border">{new Date(leave.startDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{new Date(leave.endDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{leave.type}</td>
              <td className="px-4 py-2 border">{leave.reason}</td>
              <td className="px-4 py-2 border">{leave.status}</td>
              <td className="px-4 py-2 border">
                {leave.status === 'pending' && (
                  <>
                    <button
                      onClick={() => onStatusUpdate(leave._id, 'approved')}
                      className="bg-green-500 text-white rounded px-2 py-1 mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => onStatusUpdate(leave._id, 'rejected')}
                      className="bg-red-500 text-white rounded px-2 py-1"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequestTable;