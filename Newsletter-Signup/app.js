const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});


app.post('/', (req, res) => {
    let fistName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;
    console.log(fistName, lastName, email);



});



app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});