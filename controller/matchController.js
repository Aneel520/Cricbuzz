const sequelize = require('../config/index')
const MatchDetails = require('../models/matchModel');
const { param } = require('../routes/usersRoute');

const MatchController ={
    async getMatchDetails(req,res){
        try{
            const matches = await MatchDetails.findAll();
            res.status(200).json(matches);
        }
        catch(err){
            console.log("Error in Fetching match details" , err);
            res.send(500);
        }
    },
    async getMatchDetailsById(req,res){
        try{
            const id = req.params.match_id
            const data = await MatchDetails.findOne({
                where:{
                    match_id:id
                }
            })

            res.status(200).json(data)
        }
        catch(err){
            console.log(err);
        }

    },

    async createMatch(req, res) {
        try{
            const {team_1 , team_2 , date , venue } = req.body;
            
            
            const result = await MatchDetails.create({
                team_1:team_1,
                team_2:team_2,
                date:date,
                venue:venue
            })
            res.status(200).json({"message": "Match created successfully","match_id":result.match_id})
            

        }
        catch(err){
            console.log("Error in create match details", err);
        }
    },
}


module.exports = MatchController;