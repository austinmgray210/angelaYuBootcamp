require("dotenv").config();
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

});

app.post('/', (req, res) => {

    const query = req.body.cityName;
    const apiKey = process.env.API_KEY;
    const unit = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit +"&appid=" + apiKey;

    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const location = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>The weather is currently " + description + ".</p>");
            res.write("<h1>The temperature in " + location + " is " + temp + " degrees fahrenheit.</h1>");
            res.write("<img src=" + imgURL + " alt='weather icon'>");
            res.send();
        })
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

