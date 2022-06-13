const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

// start express server on port 8080
app.listen(8080, () => {
    console.log("server started on port 8080");
});