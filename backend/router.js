const express  = require ('express');
const router = express.Router();
const taskController = require ('./controllers/tasksController')

router.get('/tasks',taskController.getAll);
//router.get ('/',(res, resp) =>{res.status = (200).send('router iniciado')})

module.exports = router;
