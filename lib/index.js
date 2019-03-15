var express = require('express');
const handler = require('./handler');
var app = express();

app.get('/healthcheck', function (req, res) {
    require('child_process').exec('git rev-parse HEAD', (err, data) => {
        const { stautsCode, responseMessage } = handler(err, data);
        res.status(stautsCode).send(responseMessage);
    });
});

module.exports = app;
