// this is my final when I get my routes and controllers

// IMPORT EXPRESS FRAMEWORK
const express = require('express');

// CREATE APP THAT USES EXPRESS
let app = express();

// DEFINE PORT
let PORT = 5001;

// LETS APP USE JSON
app.use(express.json());

// Require the routes in the todoRoutes.js
const toDos = require('./routes/todoRoutes');
// Use the toDos  routes in your app
app.use(toDos);





app.listen(PORT, () => {console.log('Application is listening on port', PORT)})

