const express = require('express');
const cors = require('cors');
const routerAnimal = require('./routes/animalRouter');

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use('/animais', routerAnimal);

module.exports = app;
