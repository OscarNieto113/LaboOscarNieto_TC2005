const express = require('express');

//Para devolver como respuesta un archivo html desde express, se requiere el módulo path, puedes incorporarlo con const path = require('path'); al inicio de tus archivos de código.
const path = require('path');

const router = express.Router();

const capybaras = [
    {nombre: "Pedro"},
    {nombre: "Poncho"},
    {nombre: "Pablo"},
    {nombre: "Patricio"}
];

router.get('/cerveza', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
});

router.get('/nuevo', (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.render('nuevo', {nombre: 'Lalo'});
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push({nombre: request.body.nombre});
    response.redirect('/capybaras');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /capybaras');
    response.render('lista', {capybaras: capybaras});
});

module.exports = router;
