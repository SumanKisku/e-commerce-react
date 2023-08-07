
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const port = 3001;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // If there are no errors, you can submit the form to your backend or handle the success case here
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(`http://localhost:${port}/signup`, formData);
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="mx-auto mt-20 w-96">
        <h2 className="mb-4 text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-4">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name}
            />
          </div>

          <div className="mb-4">
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
          <div className="mb-4">
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
