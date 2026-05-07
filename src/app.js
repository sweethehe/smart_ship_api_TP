const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();

app.use(express.json());

// R O U T E S
app.use('/health', healthRoutes);
app.use('/pricing', pricingRoutes);

module.exports = app;
