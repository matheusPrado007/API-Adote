const conn = require('./db/connection');

const insert = (animal) => conn.execute(
    'INSERT INTO animal (nome, idade, foto, descricao, uf, cidade) VALUES (?, ?, ?, ?, ?, ?)',
    [animal.nome, animal.idade, animal.foto, animal.descricao, animal.uf, animal.cidade],
  );

  const findAll = () => conn.execute(
   'SELECT * FROM animal;',
  );

  const findById = async (productId) => {
    const [[product]] = await conn.execute(
      'SELECT * FROM animal WHERE id = ?',
      [productId],
    );
    return product;
  };

  const update = async (id, animal) => {
    await conn.execute(
      `UPDATE animal SET nome = ?, idade = ?,
      foto = ?, descricao = ?, uf = ?, cidade = ? WHERE id = ?`,
      [animal.nome, animal.idade, animal.foto, animal.descricao, animal.uf, animal.cidade, id],
    );
  };

  const remove = async (id) => {
    await conn.execute('DELETE FROM animal WHERE id = (?)', [
      id,
    ]);
  };
  
module.exports = {
  insert,
  findAll,
  update,
  findById,
  remove,
};