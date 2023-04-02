const express = require('express');
var api = express.Router();


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



module.exports = api;

