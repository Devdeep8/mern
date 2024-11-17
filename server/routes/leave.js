const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/', authMiddleware, leaveController.requestLeave);
router.get('/', authMiddleware, leaveController.getLeaveRequests);
router.put('/:id', authMiddleware, leaveController.updateLeaveStatus);

module.exports = router;