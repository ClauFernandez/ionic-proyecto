const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`App is listening to port ${port}`)
})

const users = require('./users.json');

app.get('/api/users', (req, res)=>{
    res.send(users)
})

app.post('/api/login', (req, res)=>{
    try{
        let {user} = req.body;

        if(!user) res.status(404).send({mesagge:"The request is not valid."})

        if( user.username == '' || user.userName == null || user.password == '' || user.password == null)
            res.status(404).send({ mesagge: "Username and password are required. Please try again."});
    
        let isUserValid = users.users.find(u=> u.userName == user.userName && u.password == user.password);

        if(isUserValid)
            res.status(200).send({userName: user.userName, mesagge: "Login has been successfully."})
        else
            res.status(401).send({mesagge: "The user is not valid. Please try again."})

    }catch{
        res.status(500).send({mesagge: "An unexpected error occurred. Please try again."})
    }
})

app.post('/api/logout', (req, res)=>{
    res.status(200).send({mesagge: "Logout has been successfully."})
})