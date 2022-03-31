const express = require("express");
const app = express();

const PORT = 3000;

let users = [
	{name: 'Shannon', location: 'Elizabethtown'},
	{name: 'Michael', location: 'Elizabethtown'},
	{name: 'Malachi', location: 'Elizabethtown'},
	{name: 'Dominic', location: 'Mitchell'},
	{name: 'Brittany', location: 'Mitchell'}

];

app.get('/users', (req, res) => {
	res.send(users)
});

let favDesigners = [
	{designer: 'Louis Vuitton'},
	{designer: 'Gucci'},
	{designer: 'Chanel'},
	{designer: 'Christain Dior'},
	{designer: 'Yves Saint Laurent'}

];

app.get('/favDesigners', (req, res) => {
	res.send(favDesigners)
});

let sneakerHead = [
	{brand: 'Air Jordan 1 Retro High OG'},
	{brand: 'Air Jordan 1 Retro High OG University Blue'},
	{brand: 'Paris Saint Germain x Air Joran High'},
	{brand: 'Air Jordan 4 Retro Black Cat'},
	{brand: 'Jordan 11 Retro Space Jam'}

];

app.get('/sneakerHead', (req, res) => {
	res.send(sneakerHead)
});

app.listen(PORT, ()=> {
	console.log(`App started on port: ${PORT}`)
});
