const animaisDB = require('../models/animaisDB');

const getAll = async () => {
    const categories = await animaisDB.findAll();

    return categories;
};

const insert = async (animal) => {
    const newAnimal = await animaisDB.insert(animal);
    return newAnimal;
};

const insertImg = async (animal) => {
  const newAnimal = await animaisDB.insertImg(animal);
  return newAnimal;
};

const findById = async (id) => {
    try {
      const animal = await animaisDB.findById(id);
      if (!animal) {
        return { type: 'NOT_FOUND', message: 'Animal not found' };
      }
  
      return { type: null, message: animal };
    } catch (error) {
      // Lidar com erros do banco de dados ou outras exceções
      return { type: 'ERROR', message: error.message };
    }
  };

  const update = async (id, animal) => {
    try {
      const hasAnimal = await animaisDB.findById(id);
      if (hasAnimal === undefined) {
        return { type: 'NOT_FOUND', message: 'Animal not found' };
      }
  
      await animaisDB.update(id, animal);
  
      return { type: null, message: { id, animal } };
    } catch (error) {
      // Lidar com erros do banco de dados ou outras exceções
      return { type: 'ERROR', message: error.message };
    }
  };

  const remove = async (id) => {
    try {
      const hasAnimal = await findById(id);
      if (hasAnimal === undefined) {
        return { type: 'NOT_FOUND', message: 'Animal not found' };
      }
  
      await animaisDB.remove(id);
  
      return { type: null, message: 'Operação realizada com sucesso!' };
    } catch (error) {
      // Lidar com erros do banco de dados ou outras exceções
      return { type: 'ERROR', message: error.message };
    }
  };

module.exports = {
    getAll,
    insert,
    findById,
    update,
    remove,
    insertImg,
};