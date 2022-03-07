const express = require('express');

//Para devolver como respuesta un archivo html desde express, se requiere el módulo path, puedes incorporarlo con const path = require('path'); al inicio de tus archivos de código.
const path = require('path');

const router = express.Router();

const mistborn = [
    {nombre: "The last Empire"},
    {nombre: "The well of ascention"},
    {nombre: "The hero of ages"},
];

const standalones = [
    {nombre: "Elantris"},
    {nombre: "Warbreaker"},
];

const stormlight = [
    {nombre: "The way of kings"},
    {nombre: "Words of radiance"},
    {nombre: "Oaathbringer"},
    {nombre: "Rithm of War"},
];

const whitesand = [
    {nombre: "Whitesand 1"},
    {nombre: "Whitesand 2"},
    {nombre: "Whitesand 3"},
];

router.get('/cerveza', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
});

//------------------------
router.get('/mistborn', (request, response, next) => {
    console.log('GET /chunchunmaru/mistborn');
    response.render('mistborn', {nombre: 'Lalo'});
});

router.post('/mistborn', (request, response, next) => {
    console.log('POST /chunchunmaru/mistborn');
    console.log(request.body);
    capybaras.push({nombre: request.body.nombre});
    response.redirect('/chunchunmaru');
});
//---------------------------

router.use('/', (request, response, next) => {
    console.log('Ruta /chunchunmaru');
    //Se envian las variables al html dinamico
    response.render('lista', {mistborn: mistborn, standalones: standalones, stormlight: stormlight, whitesand: whitesand});
});

module.exports = router;
