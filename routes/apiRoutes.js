// Using the require function to have acces to all the Node.js paths
const path = require("path");
// Again using the require function to have access to the file system
const fs = require("fs");

// This line of code is to have access to Express.js
const express = require('express');

// Now im using the module.exports to esport the db.json file
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../db/db.json"));
      })
      // post request 
app.post('/api/notes', (req, res) => {
  let = fs.readFileSync('../db/db.json')
  res.json(`${req.method} request reviews and recieved`);
  console.info(`${req.method} request reviews and recieved`)
})


app.listen(PORT, () =>
console.log(`Express server listening on port ${5500}`))
}   
//delete request

app.delete('/', (req, res) => {
  res.json(`${req.method} request to delete reviews`);
  console.info()
})