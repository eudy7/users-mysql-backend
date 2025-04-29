const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes');

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;
