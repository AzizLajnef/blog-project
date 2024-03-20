const express = require('express');
const router = express.Router();
const {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
} = require('../controller/comments');

router.get('/', getAllComments);
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;