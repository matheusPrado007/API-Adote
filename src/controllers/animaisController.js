const animaisService = require('../services/animaisServices');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const OK_STATUS = 200;
const NO_CONTENT = 204;

const getAll = async (_req, res) => {
    try {
      const animais = await animaisService.getAll();
      return res.status(OK_STATUS).json(animais[0]);
    } catch (err) {
      res.status(INTERNAL_SERVER_ERROR).json(err.message);
    }
  };

  const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await animaisService.findById(Number(id));
  
    if (type) return res.status(type).json({ message });
  
    return res.status(OK_STATUS).json(message);
  };

  const update = async (req, res) => {
    const animal = req.body;
    const { id } = req.params;
    const { type, message } = await animaisService.update(Number(id), animal);
  
    if (type) return res.status(type).json({ message });
  
    return res.status(OK_STATUS).json(message);
  };

  // const insert = async (req, res) => {
  //   const animal = req.body;
  //   try {
  //     const [result] = await animaisService.insert(animal);
  //     res.status(CREATED).json({
  //       message: `animal cadastrada com sucesso com o id ${result.insertId}` });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(INTERNAL_SERVER_ERROR)
  //     .json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  //   }
  // };

  const insertImg = async (req, res) => {
    const animal = req.body;
    try {
      const [result] = await animaisService.insertImg(animal);
      res.status(CREATED).json({
        message: `Img do animal cadastrada com sucesso com o id ${result.insertId}` });
    } catch (err) {
      console.log(err);
      res.status(INTERNAL_SERVER_ERROR)
      .json({ message: 'Ocorreu um erro ao cadastrar um animal' });
    }
  };

  const remove = async (req, res) => {
    try {
      const { id } = req.params;
      const { type, message } = await animaisService.remove(Number(id));
      if (type) return res.status(type).json({ message: 'Deletado com sucesso' });
  
      return res.status(NO_CONTENT).json(message);
    } catch (error) {
      // Lidar com erros
      return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  };

  module.exports = {
    getAll,
    // insert,
    findById,
    update,
    remove,
    insertImg,
  };