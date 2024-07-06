// I am importing Express.js
const express = require('express');

// In this case I would be importing EXpress.js from port 5500
const PORT = 5500;

// This is a path to import built in Node.js packages
const path = require('path');

// Here I am using the app variable to declare the express function
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/apiRoutes')(app);
require('./routes/index')(app);



app.listen(PORT, () =>
console.log(`Express server listening on port 5500`)
)