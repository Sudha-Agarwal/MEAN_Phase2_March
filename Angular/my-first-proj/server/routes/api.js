const express = require('express');
var api = express.Router();


api.get('/data', function(req,res){
    res.send("Hello World");
});

api.post('/data', (req,res) => {
    console.log("post request received");
});

module.exports = api;

