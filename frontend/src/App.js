import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoginPage from './components/LoginPage';
import BlogListPage from './components/BlogListPage';
import UserProfilePage from './components/UserProfilePage';
import BlogDetailsPage from './components/BlogDetailsPage';
import NewBlogPage from './components/NewBlogPage';
import CommentFormPage from './components/CommentFormPage';
import UserRegistrationPage from './components/UserRegistrationPage';
import './App.css';

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/new-blog" element={<NewBlogPage />} />
          <Route path="/new-comment" element={<CommentFormPage />} />
          <Route path="/register" element={<UserRegistrationPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
