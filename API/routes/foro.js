const router = require('express').Router();
const Foro = require('../controllers/foro');

// FORO COMPLETO

router.get('/', Foro.getForos);
router.get('/one/:title', Foro.getForo);
router.post('/', Foro.addForo);

router.put('/one/:title', Foro.editForo);
router.delete('/one/:title', Foro.deleteForo);

// PREGUNTAS
router.get('/preguntas/:title', Foro.getQuestions);
router.get('/pregunta/:title', Foro.getQuestion); // PASAR 'pos' EN BODY. POS ES LA POSICION DE LA PREGUNTA EN EL ARRAY
router.post('/pregunta/:title', Foro.addQuestion); // PASAR LA PREGUNTA EN EL BODY
router.put('/pregunta/:title', Foro.editQuestion); // PASAR 'question' EN EL BODY CON LA ACTUALIZACIÓN, Y 'pos' CON LA POSICIÓN DE LA PREGUNTA
router.put('/status/:title', Foro.solveQuestion); // SIRVE PARA ACTIVAR O DESACTIVAR LA PREGUNTA.
// PASAR 'pos' Y 'status', que es true si queremos activarla o false si queremos desactivarla.

// RESPUESTAS

module.exports = router;
