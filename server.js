// I am importing Express.js
const express = require('express');

// In this case I would be importing EXpress.js from port 5500
const PORT = 5500;

// This is a path to import built in Node.js packages
const path = require('path');

// Here I am using the app variable to declare the express function
const app = express();

// These are two arrow functions will serve both index.html and the notes.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})