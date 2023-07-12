const express = require('express');

const routerAnimal = require('./routes/animalRouter');

const app = express();

app.use(express.json());

app.use('/animais', routerAnimal);

module.exports = app;