const router = require('express').Router()
const exampleController = require('../controllers/example')

router.get('/', exampleController.basicGet)
router.post('/', exampleController.basicPost)
router.put('/:id', exampleController.basicPut)
router.delete('/:id', exampleController.basicDelete)

module.exports = router