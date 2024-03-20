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
// login 
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//       const user = await db.User.findOne({ where: { email } });

//       // if (!user || !bcrypt.compareSync(password, user.password)) {
//       //     return res.status(401).json({ message: 'Invalid email or password' });
//       // }

//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       res.status(200).json(token );
//   } catch (error) {
//       console.error('Error during login:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// };

module.exports.getOne= async (req,res)=>{
  const {email,password}=req.body
  try{
      const user= await db.User.findOne({where:{email:email}})
         bcrypt.compare(password,user.dataValues.password,(err,result)=>{

              const token = jwt.sign({
                email:user.dataValues.email,
                  password:user.dataValues.password,


              },ACCESS_TOKEN_SECRET)
              res.status(201).send(token)

         })

  }
  catch(err){
      console.log("err",err);
      res.status(500).send(err)
  }
}