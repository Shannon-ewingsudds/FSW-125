const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let recycledItems = [
    {name: "canned goods", description: "canned goods", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "shredded paper", description: "shredded paper", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "cardboard boxes", description: "cardboard boxes", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "plastic bottles", description: "plastic bottles", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycledItems);
    })

    .get('/:itemId', (req, res) => {
        const recycleId = req.params.itemId;
        const oneItem = recycledItems.find(item => item._id === recycleId);
        res.send(oneItem);
    })
    
    .get('/search/id', (req, res) => {
        const recycleId = req.query._id;
        const filteredItems = recycledItems.filter(item => item.id === recycleId);
     
        res.send(filteredItems)
     })
     
    .post('/', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItems.push(newRecycledItem);
        console.log(recycledItems);
        res.send(`Successfully added ${newRecycledItem.name} to the list of recycled items`);
    })

   .delete('/:recycleID',(req, res) => {
        const recycleID = req.params.recycleID;
        const recycleIndex = recycledItems.findIndex(item => item._id === recycleID);
        recycledItems.splice(recycleIndex, 1);
        res.send(`Successfully deleted fron the list`);
    })

    .put('/:recycleID',(req, res) => {
        const recycleID = req.params.recycleID;
        const recycleIndex = recycledItems.findIndex(item => item._id === recycleID);
        Object.assign(recycledItemList[recycleIndex], req.body);
        res.send(`Successfully updated the list`);

    })
module.exports = recycledItemsRouter;