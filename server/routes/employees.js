const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/register', employeeController.registerEmployee);
router.get('/', authMiddleware, employeeController.getEmployees);
router.get('/search', authMiddleware, employeeController.searchEmployees);
router.get('/:id', authMiddleware, employeeController.getEmployee);
router.put('/:id', authMiddleware, employeeController.updateEmployee);
router.delete('/:id', authMiddleware, employeeController.deleteEmployee);

module.exports = router;