import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const UserRegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phoneNumber };
    axios.post('http://localhost:5000/api/user', newUser)
      .then(response => {
        console.log('User registered successfully:', response.data);
        setName('');
        setEmail('');
        setPhoneNumber('');
      })
      .catch(error => {
        console.error('error:', error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </motion.div>
  );
};

export default UserRegistrationPage;
