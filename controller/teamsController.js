const sequelize = require('../config/index')
const Teams = require('../models/teamsModel')

const TeamsController = {
    async getTeams(req,res){
        try{
            const teams_data = await Teams.findAll()
            res.status(200).json({"Teams":teams_data});
        }
        catch(err){
            console.log(err)
        }
    },
    async addTeams(req,res){
        try{
            const {team_name} = req.body;
            await Teams.create({
                team_name:team_name
            })
            res.status(200).json({"msg":"Team added successfully"});
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = TeamsController;