const router = require('express').Router();
const Foro = require('../controllers/foro');

router.get('/', Foro.getForos);
router.get('/:title', Foro.getForo);
router.post('/', Foro.addForo);

router.put('/:title', Foro.editForo);
router.delete('/:title', Foro.deleteForo);

module.exports = router;
