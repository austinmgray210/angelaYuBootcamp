require("dotenv").config();
const express = require("express");
const https = require("https");
const app = express();



app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&units=imperial&appid=" + process.env.API_KEY;

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

