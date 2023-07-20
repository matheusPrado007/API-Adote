const fs = require('fs');
const conn = require('./db/connection');

/// //

const insertImg = (req) => {
  const nomeImagem = req.file.originalname;
  const tipoImagem = req.file.mimetype;
  const tamanhoImagem = req.file.size;
  const imagemBytes = req.file.buffer;

  conn.execute('INSERT INTO imagens (nome, tipo, tamanho, imagem) VALUES (?, ?, ?, ?)',
  [nomeImagem, tipoImagem, tamanhoImagem, imagemBytes]);
};

const insert = (animal) => {
  const imagemBuffer = fs.readFileSync(animal.foto);
  conn.execute(
      'INSERT INTO animal (nome, idade, foto, descricao, uf, cidade) VALUES (?, ?, ?, ?, ?, ?)',
      [animal.nome, animal.idade, imagemBuffer, animal.descricao, animal.uf, animal.cidade],
    );
};

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
  insertImg,
};