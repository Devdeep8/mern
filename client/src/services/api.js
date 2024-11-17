import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Adjust this if your API has a different base URL
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6eyJpZCI6IjY3MzhjN2RhODQ0MjgzZTdjNGMzZTIxZiJ9LCJpYXQiOjE3MzE3NzQ0MjcsImV4cCI6MTczMTc3ODAyN30.-1VVC5vU9Gz9fcs8C3zbTA2Ym2_qK1xcyoZSPJvpecg"
  }
});

export default api;