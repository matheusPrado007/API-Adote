const express = require('express');
const cors = require('cors');
const routerAnimal = require('./routes/animalRouter');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use(cors());

app.use(express.json());

app.use('/animais', routerAnimal);

module.exports = app;
