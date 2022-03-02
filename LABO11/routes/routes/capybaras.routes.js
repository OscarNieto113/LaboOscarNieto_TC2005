const express = require('express');

const router = express.Router();

const capybaras = ["Pedro", "Poncho", "Pablo", "Patricio"];

router.get('/nuevo', (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Capybaras</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de capybaras</h1><h2>Aquí nacen los capybaras:</h2><form action="/capybaras/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Pedro"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/capybaras">Regresar a la lista de capybaras</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push(request.body.nombre);
    response.redirect('/capybaras');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /capybaras');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Capybaras</title></head><body><h1 id="principal">Este sitio es de capybaras chidos</h1><p>Tenemos los siguientes capybaras:</p><ul>';
    for (let i in capybaras) {
        respuesta += '<li>' + capybaras[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/capybaras/nuevo">Agregar un nuevo capybara</a></body></html>';
    response.send(respuesta);
});

module.exports = router;
