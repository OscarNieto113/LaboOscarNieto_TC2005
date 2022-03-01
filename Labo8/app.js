//node ./app.js   ejecutar
//http://localhost:3000/

console.log("hola desde node");

//fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}



const http = require('http');

const server = http.createServer( (request, response) => {

    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html><head>');
    response.write('<title>Cerveza</title>');
    response.write('</head><body>');
    response.write('<h1 id="principal">La historia de la cerveza</h1>');
    response.end();
});

server.listen(3000);
