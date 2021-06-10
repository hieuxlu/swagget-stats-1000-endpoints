const express = require('express');
const swStats = require('swagger-stats');
const apiSpec = require('./swagger.json');

const app = express();

app.use(swStats.getMiddleware({ swaggerSpec: apiSpec }));

app.listen(3001);

console.log('Open http://localhost:3001/swagger-stats/');