import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const BlogDetailsPage = (props) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogId = props.match.params.id;
    axios.get(`http://localhost:5000/api/blogs/${blogId}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [props.match.params.id]);

  if (!blog) {
    return <div>zven's blogs</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </motion.div>
  );
};

export default BlogDetailsPage;
