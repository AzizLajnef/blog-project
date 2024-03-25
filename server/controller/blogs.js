const Blog = require('../database/models/blogs'); 
const db=require('../database/index')
console.log(db)
module.exports.getAllBlogs = async (req, res) => {
try {
     const blogs = await db.Blog.findAll()
    res.status(200).send(blogs)
   }catch(error){
     throw error
    }}

module.exports.getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
