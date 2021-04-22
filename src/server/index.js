var path = require('path')
const express = require('express')
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

const meaningCloud_base_url = "https://api.meaningcloud.com/sentiment-2.1?";
const api_key = process.env.API_KEY;

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html')
})

app.post('/analysBlog', express.json(), async function (req, res) {
    console.log("=============url=======" , req.body.url);
    const response =  await fetch(`${meaningCloud_base_url}key=${api_key}&lang=en&url=${req.body.url}`);
    const analysedData = await response.json();
    res.send(analysedData);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send("Hello");
})