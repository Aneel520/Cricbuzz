const sequelize = require('../config/index')
const UserDetails = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController ={
    async getUserDetails(req,res){
        try{
            const users = await UserDetails.findAll();
            res.status(200).json(users);
        }
        catch(err){
            console.log("Error in Fetching user details" , err);
            res.send(500);
        }
    },

    async registerUser(req, res) {
        try{
            const {username , password , email , role } = req.body;
            const password_hash = await bcrypt.hash(password, 10)
            const find =await UserDetails.findOne({
                where: {
                    username: username
                }
            })
            if(find === null){
                const result = await UserDetails.create({
                    username:username,
                    password:password_hash,
                    email:email,
                })
                res.status(200).json({"status": "Admin Account successfully created","status_code": 200,"user_id":result.user_id})
            }
            else{
                res.status(400).send("User already exists")
            }

        }
        catch(err){
            console.log("Error in add user", err);
        }
    },
    async  loginAdmin(req, res) {
        try {
          const { username, password } = req.body;
          
          const user = await UserDetails.findOne({ 
            where:{
                username:username  
            }
           });
          if (!user) {
            return res.status(401).send({ "status": "Incorrect username/password provided. Please retry","status_code": 401 });
          }
        //   const isPasswordMatch = await user.comparePassword(password_hash);
          const isPasswordMatched = await bcrypt.compare(password, user.password)
          if (!isPasswordMatched) {
            return res.status(401).send({ "status": "Incorrect username/password provided. Please retry","status_code": 401});
          }
          const token = jwt.sign({ id: user.user_id }, '1000');
          res.send({ "status": "Login successful",
          "status_code": 200,
          "user_id": user.user_id,
          "access_token": token });
        } catch (err) {
          console.error(err);
          res.status(500).send({ error: 'Login failed' });
        }
      }
}

module.exports = UserController;