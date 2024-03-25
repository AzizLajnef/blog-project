import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user', { name, email, password });
      console.log('SignUp response:', response);
      localStorage.setItem('token', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const styles = `
    .container {
      width: 400px;
      height: 400px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border: 1px solid #8c54b7;
      border-radius: 5px;
      background-color: #fdf4f9;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #8c54b7;
    }

    form div {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      color: #8c54b7;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #8c54b7;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #8c54b7;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #6a386f;
    }
  `;

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ cssText: styles }}
      >
        <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          Sign Up
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </motion.div>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </motion.div>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </motion.div>
          <motion.button
            type="submit"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
