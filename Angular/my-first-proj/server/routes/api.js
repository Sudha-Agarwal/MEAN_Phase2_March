const express = require('express');
var api = express.Router();
const fs = require('fs');


api.get('/data', function(req,res){

    res.send("Hello World");
});

api.post('/data', (req,res) => {

    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    console.log(id);

    if(name === "Sudha"){
        res.send({data:"auth"})
    }
    else{
        res.send({data:"not auth"});
    }
    //console.log("post request received");
});

api.get('/quiz', function(req,res){
    fs.readFile(__dirname + '/data.json', function(err,data){
        if(err){
            res.status(404).send("Error reading file");
        }
        else{
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    })
});


api.post('register-user', (req,res)=>{
    console.log(req.body.user);
    const newObj = req.body.user;

    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(newObj);

        const jsonString = JSON.stringify(jsonData);

        fs.writeFile(__dirname + '/user.json', jsonString, (err)=>{

        })
    })
})



module.exports = api;

