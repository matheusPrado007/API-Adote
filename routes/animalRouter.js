const express = require('express');
const { getAll, insert, update, findById, remove } = require('../controllers/animaisController');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', validate, findById);

router.post('/', insert);

router.put('/:id', validate, update);

router.delete('/:id', validate, remove);

module.exports = router;