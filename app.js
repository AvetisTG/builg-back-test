'use strict';
global.nodent = require('nodent')();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./src/routes');
require('dotenv').config();
require('./src/models');


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});
