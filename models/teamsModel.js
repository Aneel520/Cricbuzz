const { DataTypes } = require('sequelize')
const sequelize = require('../config/index')

const Teams = sequelize.define('teams',{
    team_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    team_name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps: false 
})

module.exports = Teams;