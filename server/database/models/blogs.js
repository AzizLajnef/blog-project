const { sequelize  ,DataTypes } = require('sequelize');
module.exports=(sequelize,DataTypes)=>{
const  Blog = sequelize.define("Blog",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Image:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    })

return Blog
}



