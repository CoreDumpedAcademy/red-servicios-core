const router = require('express').Router();
const userController = require('../controllers/usercontroller');

router.get('/email/:email', userController.emailUsado);
router.get('/username/:username', userController.userUsado);

module.exports = router;
