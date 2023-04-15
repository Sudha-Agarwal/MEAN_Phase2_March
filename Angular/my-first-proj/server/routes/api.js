const express = require('express');
var api = express.Router();
const fs = require('fs');


api.get('/data', function(req,res){
    res.send("Hello World");
});

//http://localhost:3000/api/data

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

//http://loclahost:3000/api/quiz
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


api.post('/register-user', (req,res)=>{
    const user = {firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email,password:req.body.password};
   

    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(user);

        const jsonString = JSON.stringify(jsonData,null,2);

        fs.writeFile(__dirname + '/user.json', jsonString, (err)=>{

            if(err){
                res.status(404).send({msg:"Error Registering user"});

            }
            else{
                res.status(200).send({msg:"Regsitered Successfully"});
            }

        })
    })
})



module.exports = api;

