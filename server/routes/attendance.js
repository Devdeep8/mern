const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/', authMiddleware, attendanceController.markAttendance);
router.get('/', authMiddleware, attendanceController.getAttendance);
router.get('/:employeeId', authMiddleware, attendanceController.getEmployeeAttendance);

module.exports = router;