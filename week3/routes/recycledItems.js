const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let recycledItemList = [
    {name: "canned goods", description: "canned goods", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "shredded paper", description: "shredded paper", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "cardboard boxes", description: "cardboard boxes", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "plastic bottles", description: "plastic bottles", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycledItemList );
    })

    .post('/', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItemList.push(newRecycledItem);
        res.send(`Successfully added ${newRecycledItem.name} to the database of recycled items`);
    })

module.exports = recycledItemsRouter;