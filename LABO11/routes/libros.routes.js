const express = require('express');

const router = express.Router();

const libros_elantris = ["Elantris", "La esperanza de Elantris", "El alma del emperador"];
const libros_aliento = ["El aliento de los dioses"];
const libros_nacidos = ["El imperio final", "El pozo de la ascencion", "El heroe de las eras", "Aleacion de ley", "Sombras de identidad", "Brazales de duelo", "El metal perdido"];
const libros_archivo = ["El camino de los reyes", "Palabras radiantes", "Danzante del filo", "Juramentada", "Esquirla del amanecer", "El ritmo de la guerra", "Comecuernos"];

//  /NUEVO Libro Elantris POST Y USE
router.get('/nuevo', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es una guia para leer los libros de Brandon Sanderson</h1><h2>Agrega aqui los libros de Elantris que hayas leido:</h2><form action="/libros/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Cosmere"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /libros/nuevo');
    console.log(request.body);
    libros_elantris.push(request.body.nombre);
    response.redirect('/libros');
});

//  /NUEVO Libro Aliento de los dioses POST Y USE
router.get('/nuevo1', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es una guia para leer los libros de Brandon Sanderson</h1><h2>Agrega aqui los libros de El Aliento de los Dioses que hayas leido:</h2><form action="/libros/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Cosmere"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo1', (request, response, next) => {
    console.log('POST /libros/nuevo');
    console.log(request.body);
    libros_aliento.push(request.body.nombre);
    response.redirect('/libros');
});

//  /NUEVO Libro Nacidos de la Bruma POST Y USE
router.get('/nuevo2', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es una guia para leer los libros de Brandon Sanderson</h1><h2>Agrega aqui los libros de Nacidos de la Bruma que hayas leido:</h2><form action="/libros/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Cosmere"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo2', (request, response, next) => {
    console.log('POST /libros/nuevo');
    console.log(request.body);
    libros_nacidos.push(request.body.nombre);
    response.redirect('/libros');
});

//  /NUEVO Libro Archivo de las Tormentas POST Y USE
router.get('/nuevo3', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es una guia para leer los libros de Brandon Sanderson</h1><h2>Agrega aqui los libros de El Archivo de las Tormentas que hayas leido:</h2><form action="/libros/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Cosmere"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo3', (request, response, next) => {
    console.log('POST /libros/nuevo');
    console.log(request.body);
    libros_archivo.push(request.body.nombre);
    response.redirect('/libros');
});

//  error POST Y USE
router.get('/error', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Error 404</h2><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

//------------------------------------------------------------------------------
router.use('/', (request, response, next) => {
    console.log('Ruta /libros');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Inicio</title></head><body><h1 id="principal">Brandon Sanderson</h1><p>Brandon Sanderson es un escritor estadounidense de literatura fantástica y ciencia ficción.<br>Creó las Leyes de Magia de Sanderson y popularizó los Sistemas de magia dura y blanda. En 2008, comenzó un podcast llamado Writing Excuses con el escritor Dan Wells y el dibujante Howard Tayler, en el que tratan temas relacionados con la creación de la escritura de géneros y los webcomics. <img src="https://commons.wikimedia.org/wiki/File:Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg" width="100">​</p> </br><p>Estas son sus sagas mas famosas:</p>';
    respuesta += "<p>Elantris</p>"
    for (let i in libros_elantris) {
        respuesta += '<li>' + libros_elantris[i] + '</li>';
    }

    respuesta += "</br><p>El Aliento de los dioses</p>"
    for (let i in libros_aliento) {
        respuesta += '<li>' + libros_aliento[i] + '</li>';
    }

    respuesta += "</br><p>Nacidos de la Bruma</p>"
    for (let i in libros_nacidos) {
        respuesta += '<li>' + libros_nacidos[i] + '</li>';
    }

    respuesta += "</br><p>El Archivo de las Tormentas</p>"
    for (let i in libros_archivo) {
        respuesta += '<li>' + libros_archivo[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/libros/nuevo">Agregar un nuevo libro de la saga Elantris</a></body></html>';
    respuesta += '</ul><br><br><a href="/libros/nuevo1">Agregar un nuevo libro de la saga El aliento de los dioses</a></body></html>';
    respuesta += '</ul><br><br><a href="/libros/nuevo2">Agregar un nuevo libro de la saga Nacidos de la Bruma</a></body></html>';
    respuesta += '</ul><br><br><a href="/libros/nuevo3">Agregar un nuevo libro de la saga El Archivo de las tormentas</a></body></html>';
    respuesta += '</ul><br><br><a href="/libros/error">Error</a></body></html>';

    response.send(respuesta);
});

module.exports = router;
