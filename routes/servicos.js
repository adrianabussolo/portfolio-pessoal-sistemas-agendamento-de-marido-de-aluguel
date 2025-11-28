const express = require('express');
const controller = require('../controllers/servicoController');

const router = express.Router();


router.get('/', controller.listar);
router.post('/', controller.criar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);

module.exports = router;
