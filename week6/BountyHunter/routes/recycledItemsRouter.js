const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let items = [
    {name: "canned goods", description: "canned goods", recyclabe: true, quantity: 1000, price_per_unit: 1, _id: uuidv4()},
    {name: "shredded paper", description: "shredded paper", recyclabe: true, quantity: 2000,price_per_unit: 2, _id: uuidv4()},
    {name: "cardboard boxes", description: "cardboard boxes", recyclabe: true, quantity: 3000, price_per_unit: 3, _id: uuidv4()},
    {name: "plastic bottles", description: "plastic bottles", recyclabe: true, quantity: 4000, price_per_unit: 4, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(items);
    })

    .get('/:recycledId', (req, res) => {
        const recycleId = req.params.recycledId;
        const oneItem = items.find(item => item._id === recycleId);

        res.send(oneItem);
    })
    
    .get('/search/id', (req, res) => {
        const recycleIds = req.query._id;
        const filteredrecycled = items.filter(recycled=> recycled.id === recycleIds);
     
        res.send(filteredrecycled)
     })
     
    .post('/', (req, res) => {
        const newRecycled = req.body;
        newRecycled._id = uuidv4();
        items.push(newRecycled);

        res.send(newRecycled);
    })

   .delete('/:recycledID',(req, res) => {
        const recycledID = req.params.recycledID;
        const recycledIndex = items.findIndex(recycle => recycle._id === recycledID);
        items.splice(recycledIndex, 1);

        res.send(`Successfully deleted fron the list`);
    })

    .put('/:recycleID',(req, res) => {
        const recycleID = req.params.recycleID;
        const recycleIndex = items.findIndex(recycle => recycle._id === recycleID);
        Object.assign(items[recycleIndex], req.body);

        res.send(`Successfully updated the list`);

    })
    module.exports = recycledItemsRouter;