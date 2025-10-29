const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const swaggerDocument = yaml.load(fs.readFileSync('./resources/swagger.yaml', 'utf8'));

const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
