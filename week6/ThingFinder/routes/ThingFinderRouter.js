const express = require('express');
const ThingFinderRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {name: 'Nike', type: 'shoes', specific: "sneakers", price: 200, _id: uuidv4()},
    {name: 'Adidas', type: 'shoes', price: 100, _id: uuidv4()},
    {name: 'Puma', type: 'shoes', specific: "sneakers",price: 300, _id: uuidv4()},
    {name: 'Dress', type: 'clothing', price: 150, _id: uuidv4()},
    {name: 'Slacks', type: 'clothing', price: 100, _id: uuidv4()},
    {name: 'Sweater', type: 'clothing', price: 200, _id: uuidv4()},
    {name: 'Cookies', type: 'dessert', price: 15, _id: uuidv4()},
    {name: 'Brownies', type: 'dessert', specific: "chocolate", price: 20, _id: uuidv4()},
    {name: 'Cake', type: 'dessert', price: 50, _id: uuidv4()},
];

ThingFinderRouter
    .get('/', (req, res) => {
        res.send(items);
    })

    .get('/:shoes', (req, res) => {
        const shoes = req.params.shoes;
        res.send(items.filter(item => item.type === shoes));
    })

    .get('/:clothing', (req, res) => {
        const clothing = req.params.clothing;
        res.send(items.filter(item => item.type === clothing));
    })

    .get('/:dessert', (req, res) => {
        const dessert = req.params.dessert;
        res.send(items.filter(item => item.type === dessert))
    })

    .get('/search/type', (req, res) => {
        const queryType = req.query.type;
        const filteredItems = items.filter(item => item.type == queryType);
        res.send(filteredItems);
    })
    module.exports = ThingFinderRouter;