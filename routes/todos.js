const express = require('express');
const todosRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let todos = [
    {name: "Grocery Shopping", description: "Get groceries for the house", imageUrl: "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "Complete Homework", description: "Complete homework and submit", imageUrl: "https://images.pexels.com/photos/946250/pexels-photo-946250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "SDLC Project Management", description: "What I do at work", imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "Teams Meeting", description: "Conduct meetings with development team", imageUrl: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];

todosRouter
    .get('/', (req, res) => {
        res.send(todos);
    })

    .get('/:itemId', (req, res) => {
        const todosId = req.params.itemId;
        const oneItem = todos.find(item => item._id === todosId);
        res.send(oneItem);
    })

    .get('/search/id', (req, res) => {
        const todosId = req.query._id;
        const filteredItems = todos.filter(item => item.id === todosId);
     
        res.send(filteredItems)
     })
     
    .post('/', (req, res) => {
        const newtodo = req.body;
        newtodo._id = uuidv4();
        todos.push(newtodo);
        console.log(todos);
        res.send(`Successfully added ${newtodo.name} to the list of recycled items`);
    })

   .delete('/:todosId',(req, res) => {
        const todosId = req.params.todosId;
        const todoIndex = todos.findIndex(item => item._id === todosId);
        todos.splice(todoIndex, 1);
        res.send(`Successfully deleted fron the list`);
    })

    .put('/:todosId',(req, res) => {
        const todosId = req.params.todosId;
        const todoIndex = todos.findIndex(item => item._id === todosId);
        Object.assign(todos[todoIndex], req.body);
        res.send(`Successfully updated the list`);

    })
module.exports = todosRouter;