import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CommentForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { content };
    axios.post('/api/comments', newComment)
      .then(response => {
        console.log('Comment added successfully:', response.data);
        setContent('');
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="content">Comment:</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default CommentForm;
