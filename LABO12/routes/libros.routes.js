const express = require('express');

const router = express.Router();

const libros_elantris = ["Elantris", "La esperanza de Elantris", "El alma del emperador"];
//const libros_aliento = ["El aliento de los dioses"];
//const libros_nacidos = ["El imperio final", "El pozo de la ascencion", "El heroe de las eras", "Aleacion de ley", "Sombras de identidad", "Brazales de duelo", "El metal perdido"];
//const libros_archivo = ["El camino de los reyes", "Palabras radiantes", "Danzante del filo", "Juramentada", "Esquirla del amanecer", "El ritmo de la guerra", "Comecuernos"];

//  /NUEVO Libro POST Y Y USE
router.get('/nuevo', (request, response, next) => {
    console.log('GET /libros/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Libros</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es una guia para leer los libros de Brandon Sanderson</h1><h2>Agrega aqui los libros de Sanderson que hayas leido:</h2><form action="/libros/nuevo" method="POST"><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" placeholder="Cosmere"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/libros">Regresar a la lista de libros</a></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /libros/nuevo');
    console.log(request.body);
    libros_elantris.push(request.body.nombre);
    response.redirect('/libros');
});
//------------------------------------------

router.use('/', (request, response, next) => {
    console.log('Ruta /librosa');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>libros</title></head><body><h1 id="principal">Este sitio es de libros chidos</h1><p>Tenemos los siguientes libros:</p><ul>';
    for (let i in libros_elantris) {
        respuesta += '<li>' + libros_elantris[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/libros/nuevo">Agregar un nuevo libro</a></body></html>';
    response.send(respuesta);
});

router.use('/', (request, response, next) => {
    console.log('Ruta /libros');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Inicio</title></head><body><h1 id="principal">Brandon Sanderson</h1><p>Brandon Sanderson es un escritor estadounidense de literatura fantástica y ciencia ficción.<br>Creó las Leyes de Magia de Sanderson y popularizó los Sistemas de magia dura y blanda. En 2008, comenzó un podcast llamado Writing Excuses con el escritor Dan Wells y el dibujante Howard Tayler, en el que tratan temas relacionados con la creación de la escritura de géneros y los webcomics. <img src="https://commons.wikimedia.org/wiki/File:Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg" width="100">​</p>';
    for (let i in libros_elantris) {
        respuesta += '<li>' + libros_elantris[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/libros/nuevo">Agregar un nuevo libro</a></body></html>';
    response.send(respuesta);
});

module.exports = router;
