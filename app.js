const express = require('express')
const app = express()

const usersRoute = require('./routes/usersRoute')

app.use(express.json()); 

app.use('/users',usersRoute)


app.get('/', (req, res) => {
    res.send("Hi");
});

app.listen(3000,(req,res)=>{
    console.log("server is running at http://localhost:3000");
});