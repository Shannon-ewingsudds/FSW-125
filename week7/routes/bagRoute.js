const express = require('express'); 
const bagRoute = express.Router(); 
const { v4: uuidv4 } = require('uuid');

const bags = [
    {
        year: 1854,
        founder: "Vuitton",
        model: "Neverfull",
        material: "Damier",
        color: "Rose-Ballerine",
        sizes: ["Baby Bandouliere, ", "Petit Modele, ", "Moyen Modele, ", "Grand Modele",],
        price: 2030,
        available: true,
        _id: uuidv4()
    },
    {
        year: 1910,
        founder: "Chanel",
        model: "Classic-Handbag",
        material: "Lambskin",
        color: "Black",
        sizes: ["Extra Mini, ", "Mini Square, ", "Mini Rectangle, ", "Small, ", "Medium, ", "Jumbo, ", "Maxi",],
        price: 8800,
        available: true,
        _id: uuidv4()
    },
    {
        year: 1946,
        founder: "Dior",
        model: "Lady-Dior",
        material: "Natural-Cannage-Lambskin",
        color: "Black",
        sizes: ["Mini, ", "Small, ", "Medium, ", "Large",],
        price: 6300,
        available: true,
        _id: uuidv4()
    },
    {
        year: 1921,
        founder: "Gucci",
        model: "GG Marmont",
        material: "Leather",
        color: "Blue",
        sizes: ["Supper Mini, ", "Mini, ", "Small, ", "Medium", ],
        price: 2590,
        available: true,
        _id: uuidv4()
    }
];

bagRoute
    .get('/all', (req, res) => {
        res.status(200).send(bags); // Successful request.
    }) // GET ALL REQUEST

    .get('/:founder', (req, res, next) => {
        const bagFounder = req.params.founder;
        const matches = bags.filter((bag) => bag.founder === bagFounder);

        if (matches.length === 0){
            const error = new Error('This bag founder was not found.');
            res.status(404); // Not found. 
            return next(error);
        };

        res.status(200).send(matches); // Successful request.
    }) // GET ONE REQUEST OFF ON bag founder

    .post('/add', (req, res) => {
        const newBag = req.body;
        newBag._id = uuidv4();
        bags.push(newBag);
        res.status(201).send(req.body); // Successfully created resource.
    }) // ADDS NEW bag

    .delete('/delete/:bagId', (req, res, next) => {
        const bagId = req.params.bagId;
        const bagIndex = bags.findIndex((bag) => bag._id === bagId);
        bags.splice(bagIndex, 1);
        res.status(202).send(`bag has been successfully removed.`); // Successfully created/updated resource. 
    }) // DELETES bag

    .put('/edit/:bagId', (req, res) => {
        const bagId = req.params.bagId;
        const bagIndex = bags.findIndex((bag) => bag._id === bagId);
        const editedBag = Object.assign(bags[bagIndex], req.body);
        res.status(201).send(editedBag); // Successfully created resource. 
    }) // EDIT bagS


module.exports = bagRoute;