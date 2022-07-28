const {Sequelize} = require('sequelize')
const sequelizeDB = new Sequelize('platzi-market','postgres','1',{
  host:'localhost',
  dialect:'postgres'
})

module.exports = sequelizeDB

