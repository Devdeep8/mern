const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  hireDate: { type: Date, default: Date.now },
  salary: { type: Number, required: true },
  skills: [String],
  performanceReviews: [{
    date: Date,
    rating: Number,
    comments: String
  }],
  trainingCompleted: [{
    name: String,
    date: Date
  }],
  documents: [{
    name: String,
    url: String,
    uploadDate: Date
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  attendance: [{
    date: Date,
    status: String
  }],
  leaveBalance: {
    annual: Number,
    sick: Number,
    personal: Number
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);