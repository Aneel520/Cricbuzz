const sequelize = require('../config/index')
const PlayerDetails = require('../models/playersModel');

const PlayerController ={
    async getPlayers(req,res){
        try{
            const players_data = await PlayerDetails.findAll();
            res.status(200).json(players_data);
        }
        catch(err){
            console.log("Error in Fetching players details" , err);
            res.send(500);
        }
    },
    async getPlayerDetailsById(req,res){
        try{
            const id = req.params.player_id
            const data = await PlayerDetails.findOne({
                where:{
                    player_id:id
                }
            })

            res.status(200).json(data)
        }
        catch(err){
            console.log(err);
        }

    },

    async insertPlayer(req, res) {
        try{
            const {name, role  } = req.body;
            const id = req.params.team_id
            
            
            const result = await PlayerDetails.create({
                name:name,
                role:role,
                team_id:id
            })
            res.status(200).json({"message": "Player added to squad successfully","player_id":result.player_id})
            

        }
        catch(err){
            console.log("Error in insert player details", err);
        }
    },
}


module.exports = PlayerController;