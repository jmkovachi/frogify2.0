var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname +'./../../')); //serves the index.html

app.use(bodyParser.json())

app.post('/frogify', (req,res) => {
    res.send(JSON.stringify({'artist' : req.body.artist}));
});

app.listen(4000); //listens on port 3000 -> http://localhost:3000/
