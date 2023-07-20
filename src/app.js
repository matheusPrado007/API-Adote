const express = require('express');
const cors = require('cors');
const routerAnimal = require('./routes/animalRouter');

const app = express();

const corsOptions = {
    origin: '*',
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use('/animais', routerAnimal);
app.use('/imagens', routerAnimal);

module.exports = app;
