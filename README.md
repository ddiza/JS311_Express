# JS311_Express Examples

Create a backend that is always running
listening for requests

Request
*** verb (GET, POST, PUT, DELETE)
- URL or domain
*** routte - what comes after the domain
- query (sometimes) - the stuff after the question mark, "?"
- body (sometimes)
- header (sometimes for extra options or params)

Response
*** body
*** response/status code
- header(usually won't worry about referring to this)

When we're working on our computers, we are the server.

http://localhost:5001/ plus a route


Truthy and Falsey
- False values
   empty string '' or ""
   0
   null
   undefined
   NaN
   false
- Everything else is true
////////////////////////////////////

CLASS 3

Review
path (route) params:
you can have only one path param
i.e.
GET /todos/:id and
GET /tools/:completed
are the same - the world is just a placeholder

Query Parameters (query prams):
- You can have more than one, but we'll just use one in our examples for now.
- GET /todos?completed=false
- GET /todos?completed=true

  -> one route that either has a query value passed or not
  -> use conditional (if statement) to find option
****************

We're going to build our own todo app with our own api interface and our own data

tod object should have:
- id : id of the todo item
- description: what the todo is
- completed : true or false

We're building a todo backend and here is what we want to support:

- Route that returns all the todos in our list
  Get /Todos
  return an array of all todo objects

- Route that returns a single todo based on the id provided.
  Get /todos/:id
   :id is the id of the todo to return if it exists
   otherwise, return message "ID not found"

- Route that will delete a single todo based on the ID provided.
   DELETE /todos/:id
      :id is the id of the todo that was deleted
      return message with the item that was deleted

- Route that adds a single todo to the list
   Post /todos
      Body should include an object that has a description.
      We'll make a function that generates a randon ID that's added
         when the new todo is created
      EXAMPLE:  body:
                  {"description" : "feed the dog"}

- Route that updates an existing todo based on the ID provide
   PUT /todos/:id
   ex: /todos/10, body={"description": "buy groceries", "completed": true}

POST and PUT use the body

We're going to build a function to generate a random id

Math.randon() // generates a number between 0 and 1
               // it will NEVER return 1

0
0.001
0.5679865464654654
1 NEVER

0.567984654646544654 * 100000
567984.65464654654
-> Mat.floor(567984.65464654654) -> 567984

