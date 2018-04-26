const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hello: 'you'});
});

const port = process.ENV.port || 5000;
app.listen(port);

