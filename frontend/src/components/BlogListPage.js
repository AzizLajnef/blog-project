import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs/getAll')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Blog List</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {blogs.map(blog => (
            <motion.li
              key={blog.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ marginBottom: '10px' }}
            >
              <Link
                to={`/blog/${blog.id}`}
                style={{
                  display: 'block',
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                }}
              >
                {blog.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BlogListPage;
