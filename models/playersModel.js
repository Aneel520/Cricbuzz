const { DataTypes } = require('sequelize')
const sequelize = require('../config/index');
const Teams = require('./teamsModel')

const PlayerDetails = sequelize.define('player_details',{
    player_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    runs:{
        type:DataTypes.INTEGER,
        
    },
    average:{
        type:DataTypes.FLOAT,
        
    },
    strike_rate:{
        type:DataTypes.FLOAT,
        
    },
    team_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: Teams,
            key: 'team_id' 
        }
    }
},{
    timestamps: false 
})

module.exports = PlayerDetails;