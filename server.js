const express = require('express');
const app = express();

const recycledItems = require('./routes/recycledItems');

const PORT = 3000;

//middleware
app.use(express.json());

//route
app.use('/itemsIntake', recycledItems);

//server start-up logic
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});