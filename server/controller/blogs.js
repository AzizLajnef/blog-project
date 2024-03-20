const Blog = require('../database/models/blogs'); 
const {db,sequelize}=require('../database/index')
module.exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await db.Blog.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).send(allBlogs);
  } catch (error) {
    throw error;
  }
};

module.exports.createBlog = async (req, res) => {
  try {
    const blog = await db.Blog.create(req.body);
    res.status(201).send(blog);
  } catch (error) {
    throw error;
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const blog = await db.Blog.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send(blog);
  } catch (error) {
    throw error;
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    await db.Blog.destroy({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    throw error;
  }
};
