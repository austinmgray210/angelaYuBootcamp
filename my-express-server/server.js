const express = require("express");
const app = express();
const port = 3000;

// Root page
app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

// Contacts page
app.get("/contact", (req, res) => {
   res.send("Contact Me at: Austin@gmail.com");
});

// About Me page
app.get("/about", (req, res) => {
   res.send("This website is owned by Austin Gray");
});

app.get("/hobbies", (req, res) => {
   res.send("<ul><li>Rootbeer</li><li>Code</li><li>Sleep</li></ul>")
});

app.listen(port, function () {
    console.log("Server started on port 3000");
});