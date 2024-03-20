const { Sequelize  ,DataTypes } = require('sequelize');


const sequelize = new Sequelize('proj', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();

const db = {};

db.Blog=require("../database/models/blogs")(sequelize,DataTypes)
db.User=require("../database/models/user")(sequelize,DataTypes)
db.Comment = require("../database/models/comments")(sequelize, DataTypes);
db.Followers = require("../database/models/followers")(sequelize, DataTypes);


// sequelize.sync({ force: true });

module.exports = db;