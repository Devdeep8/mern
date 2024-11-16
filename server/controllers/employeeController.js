const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.registerEmployee = async (req, res) => {
  try {
    const { name, email, password, position, department, salary } = req.body;

    let employee = await Employee.findOne({ email });
    if (employee) {
      return res.status(400).json({ message: 'Employee already exists' });
    }

    employee = new Employee({
      name,
      email,
      password,
      position,
      department,
      salary
    });

    const salt = await bcrypt.genSalt(10);
    employee.password = await bcrypt.hash(password, salt);

    await employee.save();

    const payload = {
      employee: {
        id: employee.id
      }
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().select('-password');
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).select('-password');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(500).send('Server error');
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(500).send('Server error');
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await employee.remove();
    res.json({ message: 'Employee removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(500).send('Server error');
  }
};

exports.searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;
    const employees = await Employee.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { position: { $regex: query, $options: 'i' } },
        { department: { $regex: query, $options: 'i' } }
      ]
    }).select('-password');
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};