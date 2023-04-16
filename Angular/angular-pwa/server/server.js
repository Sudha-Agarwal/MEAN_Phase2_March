const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');

app.use(cors());
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/online-test')));

app.get('/todo-list', (req,res) =>{
    console.log("Todo request");

    const todoList = [{
        id:'task1',
        title:'Buy Milk'
    },
    {
        id:'task2',
        title:'Buy Bread'
    }
    ];

    return res.json(todoList);
});

app.get('/fresh-todo-list', (req,res) =>{
    console.log("Fresh Todo request");

    const todoList = [{
        id:'task1',
        title:'Buy Milk1'
    },
    {
        id:'task2',
        title:'Buy Bread1'
    }
    ];

    return res.json(todoList);
});


app.listen(5000,function(){
    console.log("listen to port 5000");
});