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
router.post('/pregunta/:title', Foro.addQuestion); // PASAR LA PREGUNTA EN EL BODY
router.put('/pregunta/:title', Foro.editQuestion); // PASAR 'question' EN EL BODY CON LA ACTUALIZACIÓN, Y 'pos' CON LA POSICIÓN DE LA PREGUNTA
router.put('/status/:title', Foro.solveQuestion); // SIRVE PARA ACTIVAR O DESACTIVAR LA PREGUNTA.
// PASAR 'pos' Y 'solved', que es true si la pregunta está resuelta o false si sigue sin resolver

// RESPUESTAS
router.post('/respuesta/:title', Foro.addAnswer); // PASAR 'answer' Y 'pos'. AÑADE LA RESPUESTA 'answer' A LA PREGUNTA DE LA POSICION POS
router.put('/respuesta/:title', Foro.editAnswer); // PASAR 'pos', 'answer' Y 'ans'. EDITA LA RESPUESTA EN POSICION 'ans' Y LA SUSTITUYE POR 'answer'
// OTRO
router.post('/miembro/:title/:member', Foro.addMember);
router.post('/quitarmiembro/:title/:member', Foro.deleteMember);
module.exports = router;
