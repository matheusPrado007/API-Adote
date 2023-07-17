const express = require('express');
const cors = require('cors');
const routerAnimal = require('./routes/animalRouter');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(cors());

app.use(express.json());

app.use('/animais', routerAnimal);

module.exports = app;
