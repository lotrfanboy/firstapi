const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('select * from produtos');
  return tasks;
};


const createProd = async (produto) =>{
  const {codigo, descricao} = produto;
  const dataUtc = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO produto (descricao, codigo, dt_cad) VALUES (?, ?, ?)';
  const [createdProd] = await connection.execute(query[codigo, descricao, dataUtc]);
  return(createdProd);
}

module.exports = {
  getAll,
  createProd,
}