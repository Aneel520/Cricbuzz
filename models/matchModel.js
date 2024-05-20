const { DataTypes } = require('sequelize')
const sequelize = require('../config/index')

const MatchDetails = sequelize.define('match_details',{
    match_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    team_1:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    team_2:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    venue:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    timestamps: false 
})

module.exports = MatchDetails;