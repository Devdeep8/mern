const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/employees', require('./routes/employees'));
// app.use('/api/attendance', require('./routes/attendance'));
// app.use('/api/leave', require('./routes/leave'));
// app.use('/api/payroll', require('./routes/payroll'));
// app.use('/api/documents', require('./routes/documents'));
// app.use('/api/tasks', require('./routes/tasks'));
// app.use('/api/communication', require('./routes/communication'));
// app.use('/api/performance', require('./routes/performance'));
// app.use('/api/training', require('./routes/training'));
// app.use('/api/onboarding', require('./routes/onboarding'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));