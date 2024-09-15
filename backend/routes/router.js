const express  = require ('express');
const router = express.Router();

router.get ('/',(res, resp) =>{
res.status = ('200').send('router iniciado')
})

module.exports = router;
