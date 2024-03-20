import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import BlogList from './components/BlogList';
import UserProfile from './components/UserProfile';
import BlogDetails from './components/BlogDetails';
import BlogForm from './components/BlogForm';
import CommentForm from './components/CommentForm';
import UserRegistrationForm from './components/UserRegistrationForm';
import './App.css';

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/blog/list" element={<BlogList />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/blog/create" element={<BlogForm />} />
          <Route path="/comment/create" element={<CommentForm />} />
          <Route path="/user/register" element={<UserRegistrationForm />} />
          {/* Redirect to login page if route not found */}
          <Route path="*" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
