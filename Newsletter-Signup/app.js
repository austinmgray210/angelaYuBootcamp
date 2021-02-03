const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("Hello there");
});


app.post('/', (req, res) => {
  res.send("Hello");
});



app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});