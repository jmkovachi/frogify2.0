const bodyParser = require('body-parser');
const express = require('express');

// load .env file, if there is one.
require('dotenv').load();

const app = express();
const SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId : process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET,
    redirectUri : 'http://localhost:3030/redirect_login'
  });

const scopes = ['user-read-private'];
const state = '';

app.set('view engine', 'pug');
app.set('views', './views');


console.log(__dirname);

app.use(express.static(__dirname + './../../')); //serves the index.html
app.use(bodyParser.json());

 /*app.get('/', (req, res) => {
    console.log('hi');
    res.send('static/index.html');
});*/

app.get('/login', (req, res) => {
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
    res.redirect(authorizeURL);
});

app.get('/redirect_login', (req, res) => {
    spotifyApi.authorizationCodeGrant(req.query.code)
    .then(function(data) {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);

        // Set the access token on the API object to use it in later calls
        spotifyApi.setAccessToken(data.body['access_token']);
        spotifyApi.setRefreshToken(data.body['refresh_token']);
    }, function(err) {
        console.log('Something went wrong!', err);
    });
    res.send('made it');
})

app.post('/frogify', (req, res) => {
    res.send(JSON.stringify({'artist': req.body.artist}));
});

app.listen(3030); //listens on port 3030 -> http://localhost:3030/ (my system has something else running on 3000)
