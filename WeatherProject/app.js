const express = require("express");
const https = require("https");
const app = express();
import "../keys";


app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=" + weatherMapKey + "&units=imperial";

    https.get(url, (response) => {
        console.log(response.statusCode);
    });
    res.send("Server is up and running.");
});



app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

