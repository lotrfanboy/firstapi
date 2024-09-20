const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('select * from produtos');
    return tasks;
  };

module.exports = {
    getAll
}