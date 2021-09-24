const express = require('express');
const app = require('express')();
const db = require('./database');
const config = require('./config');


const { app: { port }} = config;

// parsing
app.use(express.json()); 

// Routes
app.use('/api/user', require('./Router/userRoutes'));

// Server to listen
app.listen(port)

module.exports = app;