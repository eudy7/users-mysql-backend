const express = require('express');
const app = express();
const userRoutes = require('./routes');

app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;
