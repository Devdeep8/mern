const Employee = require('../models/Employee');
const Leave = require('../models/Leave');

exports.requestLeave = async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason, type } = req.body;
    const leave = new Leave({
      employee: employeeId,
      startDate,
      endDate,
      reason,
      type
    });
    await leave.save();
    res.json({ message: 'Leave request submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getLeaveRequests = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('employee', 'name');
    res.json(leaves);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateLeaveStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const leave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!leave) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    res.json(leave);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};