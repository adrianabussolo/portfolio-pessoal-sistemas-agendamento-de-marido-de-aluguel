const express = require('express');
const controller = require('../controllers/servicoController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.listar);
router.post('/', auth, controller.criar);
router.get('/:id', auth, controller.buscarPorId);

module.exports = router;
