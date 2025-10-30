const express = require('express');
const controller = require('../controllers/servicoController');

const router = express.Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.get('/:id', controller.buscarPorId);

module.exports = router;
