
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const port = 3001;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic form validation
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, you can submit the form to your backend or handle the success case here
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(`http://localhost:${port}/login`, formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="mx-auto mt-20 w-full md:w-96 px-4">
        <h2 className="mb-4 text-2xl font-semibold text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username}
            />
          </div>
          <div>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </div>
          <div>
            <p className="text-center">Don't have an account? <Link to="/signup" className="text-blue-700">Create account</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
