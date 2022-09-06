// Creates necessary Dependencies.
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets Port.
const PORT = process.env.PORT || 3001;

const noteData = require("./db/db.json");

// This will create an express server.
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// This parses string or array.
app.use(express.urlencoded({extended: true}));

// This parses JSON data.
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, "./public/notes.html"))
});

// Listener
app.listen(PORT, () => {
    console.log(`The Server is listening on PORT: ${PORT}`);
});