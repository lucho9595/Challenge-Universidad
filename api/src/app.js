const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors'); // Importar el middleware cors
const routes = require('./routes/index.js');

require('./db');

const app = express();

app.name = 'API';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// Utilizar el middleware cors
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde localhost:4000
    credentials: true // Permitir el envío de cookies
}));

app.use('/', routes);

// Error catching endware.
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;