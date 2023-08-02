// CHECK
console.log("loading app.js")

// IMPORT EXPRESS FRAMEWORK
const express = require('express');

// CREATE APP THAT USES EXPRESS
let app = express();


// DEFINE PORT
let PORT = 5001;


// LETS APP USE JSON
app.use(express.json());
////////////////////////////




// Route: Add a single todo to the list
/**
 * Need an array variable to hold my todo objects
 * Read the description from the request body
 *   and create a new todo with the description
 * Use a random number for the ID
 * Set the completed to false
 */

let db = []; //this is just for testing. We'd really use a database do data is persistent.

app.post("/todos", (req,res) => {

    let newItem = {};

    newItem.description = req.body.description;
    newItem.completed = false;
    newItem.id= randomInt();

    // send to database array
    db.push(newItem);

    res.json(newItem);
})



// Route: Returns all the todos in our list
app.get("/todos", (req, res) =>{
    console.log("GET /todos")

    res.json(db);
})


// Route: Returns a single todo based on the id provided
/**
 * Get the ID of the todo we want from the route aram
 * Find that todo in our 'database' that matches the route ID
 *   i.e., loop(for or while), HO find, HO findIndex, HO filter, HO reduce
 * If we find it, return the todo
 * Otherwise, return message 'not found' or return null
 */
app.get("/todos/:id", (req,res) => {
    // get the id from the route
    let myID = req.params.id
    let matchingItem = db.find((item, index) => {
        return item.id == myId;
    })    

    if(matchingItem) {
        res.json(matchingItem);
    } else {
            res.send("ID not found");
    }
})   


// Route: Delete a single todo based on the ID provided;
app.delete("/todos/:id", (req,res) => {
    let myId = req.params.id;

    // Find the matching ID of the item in the db
    let matchingItem = db.find((item, index) => {
        return item.id == myId;
    })
    // If found, remove it, then return deleted item. otherwise, 404
    if(matchingItem) {
        let deletedItem = db.splice(matchingItem, 1);
        res.json(deletedItem);
    }   else {
        res.sendStatus(404);
    }
    })



// Route: Updates an existing todo based on the ID provide
/**
 * get the param id from the route
 * var that holds description from the body that I'm sending/updating
 * var (coming from the body) that holds the completd from the body that I'm sending/updateding
 *  i.e., let completed = req.body.completed
 * find the item that matches the id (find should work or findIndex)
 * 
 * if we find the matching item, matchingItem.completed = completed
 *   otherwise send invalid id msg
 */

app.put("/todos/:id", (req, res) => {
    let myId = req.params.id;
    let description = req.body.description; 
    let completed = req.body.completed == true;
 
    let matchingItem = db.find( (item, index) => {
       return item.id == myId;
    })
 
    if(matchingItem) {
       matchingItem.description = description;
       matchingItem.completed = completed;
       res.json(matchingItem);
    } else {
       res.send("Invalid Id")
    }
 
 })
 
    

const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


app.listen(PORT, () => {console.log('Application is listening on port', PORT)})
