const express = require('express');
const app = express();

//----------configuraciones--------
require('./server/config/config');

/*----------middleware-------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json('Hola index');
})

app.post('/estudiante', (req, res) => {
    let body = req.body;

    res.json(body);
})

app.put('/estudiante/:id', (req, res) => {
    let paramentro = req.params.id;

    res.json(paramentro);
})

app.delete('/estudiante/:id', (req, res) => {
    let paramentro = req.params.id;

    res.json('Estudiante eliminado');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto ', process.env.PORT);
})