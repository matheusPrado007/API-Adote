const express = require('express');
const multer = require('multer');
const {
     getAll, 
    // insert,
     update,
      findById,
       remove,
       insertImg,
     } = require('../controllers/animaisController');
const { validate } = require('../middlewares/validate');

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('imagem');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', validate, findById);

// router.post('/', insert);

router.post('/', upload, (req, res) => insertImg(req, res));

router.put('/:id', validate, update);

router.delete('/:id', validate, remove);

module.exports = router;