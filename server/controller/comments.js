const Comment = require('../database/models/comments');
const {db,sequelize}=require('../database/index')
module.exports.getAllComments = async (req, res) => {
  try {
    const allComments = await db.Comment.findAll();
    res.status(200).json(allComments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.createComment = async (req, res) => {
  try {
    const newComment = await db.Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedComment = await db.Comment.update(req.body, {
      where: { id },
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Comment.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};