const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

//const admin = require('./server/routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);
//localhost:3000/api/data

//app.use('/admin',admin);
//localhost:3000/admin/data


app.use(express.static(path.join(__dirname, 'dist/my-first-proj')))

app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/my-first-proj/index.html'));
});


app.listen(3000,function(){
    console.log("listening on port 3000")
});



