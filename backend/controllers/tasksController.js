const tasksModel = require('../models/taskModels')

const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks)
};

const createProd = async(req, res) =>{
    const produto = await tasksModel.createProd(req.body)
    return res.status(201).json(produto)
};
module.exports = {
    getAll,
    createProd
};