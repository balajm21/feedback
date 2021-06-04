const express = require('express');

const app = express();

app.get('/', (req, res) => { 
    res.send({hi: 'super bro from techthando'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);