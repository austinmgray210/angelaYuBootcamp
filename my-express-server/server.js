const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.listen(port, function () {
    console.log("Server started on port 3000");
});