const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/commerceRoutes');
const bodyParser = require('body-parser');

const app = express();
routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/commerceDB'); 

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

