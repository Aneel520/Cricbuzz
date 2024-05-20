const express = require('express')
const app = express()

const usersRoute = require('./routes/usersRoute')
const matchRoute = require('./routes/matchRoute')
const teamsRoute  = require('./routes/teamsRoute')
const playerRoute = require('./routes/playerRoute')

app.use(express.json()); 

app.use('/api/admin',usersRoute)

app.use('/api',matchRoute)

app.use('/api',teamsRoute)

app.use('/api',playerRoute )


app.get('/', (req, res) => {
    res.send("Cricbuzz apis");
});

app.listen(3000,(req,res)=>{
    console.log("server is running at http://localhost:3000");
});