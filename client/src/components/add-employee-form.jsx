import React, { useState } from 'react'
import api from '../services/api'

export default function AddEmployeeForm({ onEmployeeAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '' ,
    position: '',
    department: '',
    salary: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/employees/register', formData)
      onEmployeeAdded(response.data)
      setFormData({
        name: '',
        email: '',
        password: '',
        position: '',
        department: '',
        salary: ''
      })
      setSuccess(true)
      setError('')
    } catch (error) {
      setError('Failed to add employee. Please try again.')
      setSuccess(false)
      console.error('Error adding employee:', error)
    }
  }

  return (
    <div className="add-employee-form">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            <option value="HR">Human Resources</option>
            <option value="IT">Information Technology</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Employee added successfully!</p>}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}