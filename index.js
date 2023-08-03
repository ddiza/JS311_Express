// This is my final when I get my routes and controllers

const express = require('express'); // IMPORT EXPRESS FRAMEWORK
let app = express(); // CREATE APP THAT USES EXPRESS
let PORT = 5001; // DEFINE PORT
app.use(express.json()); // LETS APP USE JSON

const toDos = require('./routes/todoRoutes'); // Require the routes in the todoRoutes.js
app.use(toDos); // Use the toDos  routes in your app

app.listen(PORT, () => {console.log('Application is listening on port', PORT)})

