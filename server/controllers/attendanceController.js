const Employee = require('../models/Employee');

exports.markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    employee.attendance.push({ date, status });
    await employee.save();
    res.json({ message: 'Attendance marked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const employees = await Employee.find().select('name attendance');
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEmployeeAttendance = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId).select('name attendance');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};