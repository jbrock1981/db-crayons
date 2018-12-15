const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = process.env.PORT || 42;

server.use(express.json());

server.post('/crayons', (req, res) => {
    const crayon = req.body;
    console.log(req.body);
    db('crayons').insert(crayon)
    .then(ids => {
        res
            .status(201)
            .json(ids)
    })
    .catch(err => {
        res
            .status(500)
            .json({ message: "Unable to add crayon."})
    })
});

server.get('/crayons', (req, res) => {

});

server.get('/crayons/:id', (req, res) => {

});

server.put('/crayons/:id', (req, res) => {

});

server.delete('/crayons/:id', (req, res) => {

});

server.listen(PORT, () => {
    console.log(`server live on PORT ${PORT}`)
});
