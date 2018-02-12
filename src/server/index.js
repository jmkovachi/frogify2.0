const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname + '/static')); //serves the index.html
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send(__dirname)
// });

app.post('/frogify', (req, res) => {
    res.send(JSON.stringify({'artist': req.body.artist}));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
