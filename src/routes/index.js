const express = require('express');
const path = require("path");
const fs = require("fs");

const router = express.Router();

const routesPath = path.join(__dirname, '/../routes');

fs.readdirSync(routesPath)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js') && (file !== 'index.js');
    })
    .forEach(file => {
        const route = require(path.join(routesPath, file));
        const routePath = file.replace('.js', '');
        router.use(`/${routePath}`, route);

    });

module.exports = router;
