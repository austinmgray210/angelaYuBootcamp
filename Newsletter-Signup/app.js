const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.post('/', (req, res) => {
    const fistName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fistName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const apiKey = process.env.API_KEY;
    const listKey = process.env.LIST_ID;
    const url = "https://us1.api.mailchimp.com/3.0/lists/" + listKey;
    const options = {
        method: "POST",
        auth: "austin1:" + apiKey
    }

    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log((JSON.parse(data)));
        })
    })

    request.write(jsonData);
    request.end();


});

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});