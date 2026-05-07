const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(express.json());

// R O U T E S
app.use('/health', healthRoutes);

module.exports = app;
