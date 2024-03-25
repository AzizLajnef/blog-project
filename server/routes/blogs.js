const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getOneBlog,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blogs'); 

router.get('/getAll', getAllBlogs);
router.get('/:id', getOneBlog);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
