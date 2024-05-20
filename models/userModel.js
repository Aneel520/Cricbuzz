const { DataTypes } = require('sequelize')
const sequelize = require('../config/index')

const UserDetails = sequelize.define('users',{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    username:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    role:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps: false 
})

module.exports = UserDetails;