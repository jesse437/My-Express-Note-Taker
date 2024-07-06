// Using the require function to have acces to all the Node.js paths
const path = require("path");
// Again using the require function to have access to the file system
const fs = require("fs");
const uniqid = require("uniqid");
// This line of code is to have access to Express.js
const express = require("express");
const { title } = require("process");



// Now im using the module.exports to esport the db.json file
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
  // post request
  app.post("/api/notes", (req, res) => {
    // reading the existing db file. to read the notes a;ready present in json
    let db = fs.readFileSync("../db/db.json");
    // parsing the DB json file
    db = JSON.parse(db);
    res.json(db);
    // creating body for note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    db.push(userNote);
    fs.writeFileSync("../db/db.json", JSON.stringify(db));
    res.json(db);
    console.info(`${req.method} request reviews and recieved`);
  });
};


