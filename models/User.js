const { DataTypes } = require("sequelize");
const sequelizeDB = require("../database/config");




const User = sequelizeDB.define('users',{
 
  id_user:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,

  }
  

},{
  timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
})


module.exports = User
