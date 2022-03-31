const express = require("express");
const app = express();

const PORT = 3000;

let users = [
	{name: 'Patrick', location: 'bushwick'},
	{name: 'Ben', location: 'crown heights'},
	{name: 'Anna', location: 'manhattan'},
	{name: 'Casey', location: 'phoenix'},
	{name: 'Fiji', location: 'phoenix'}

];

app.get('/users', (req, res) => {
	res.send(users)
});

app.listen(PORT, ()=> {
	console.log(`App startedon port: ${PORT}`)
});
