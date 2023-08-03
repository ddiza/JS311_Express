// For Class-4 homework, require the appropriate data file
// ex., let db = require('./data/vehicle')
let db = [];


const postTodo = (req,res) => {

    let newItem = {};

    newItem.description = req.body.description;
    newItem.completed = false;
    newItem.id= randomInt();

    db.push(newItem); // send to database array
    res.json(newItem);
}


const getAllTodos = (req, res) =>{
    console.log("GET /todos")

    res.json(db);
}


const getById = (req, res) => {
     
     let myId = req.params.id; // Get the id from the route
 
   // Find that todo in our 'database' that matches the route id
   let matchingItem = db.find((item, index) => {
      return item.id == myId;
   })

   if(matchingItem) {
      res.json(matchingItem);
   } else {
       res.send("Invalid Id")
    }
 
 }

 
const deleteTodo = (req,res) => {
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
}

const updateTodo = (req, res) => {
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
 }

 const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);
 
    return randomInt;
 }
 
 module.exports = {postTodo, getAllTodos, getById, deleteTodo, updateTodo}