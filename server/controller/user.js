const bcrypt = require('bcryptjs');
const User = require('../database/models/user'); 
const db = require('../database/index');
const jwt=require("jsonwebtoken")
const {ACCESS_TOKEN_SECRET}=require("./config")
module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.User.findAll();
    res.status(200).send(allUsers);
  } catch (error) {
    throw error;
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user =  db.User.create({ name, email, password: hashedPassword });
    
    res.status(201).send(user);
  } catch (error) {
    throw error;
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 12);
    }
    
    const user = await db.User.update(
      { name, email, password: hashedPassword },
      { where: { id } }
    );
    
    res.status(200).send(user);
  } catch (error) {
    throw error;
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.User.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    throw error;
  }
};


module.exports.getOne = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({
          email: user.email,
          password: user.password,
        }, ACCESS_TOKEN_SECRET);
        res.status(200).send(token);
      } 
      else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};