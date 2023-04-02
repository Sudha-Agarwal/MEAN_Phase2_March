const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.use(express.static(path.join(__dirname, 'dist/my-first-proj')))

app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/my-first-proj/index.html'));
});


app.listen(3000,function(){
    console.log("listening on port 3000")
});
