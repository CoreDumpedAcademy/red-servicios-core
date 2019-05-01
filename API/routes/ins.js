const router = require('express').Router();
const insController = require('../controllers/inscontroller');

router.get('/:username', insController.getIns);

// TODAS ESTAS RUTAS REQUIEREN MIDDLEWARE PARA SOLO ESTAR DISPONIBLES
// SI LAS UTILIZA UN ADMINISTRADOR
router.put('/:username', insController.addIns);
router.put('/:username/:pos', insController.deleteIns);

module.exports = router;
