//cd "LABO10"
//node ./app.js   ejecutar
//http://localhost:3000/   Pagina PRINCIPAL
//http://localhost:3000/LABO1   Pagina Laboratorio 1
//http://localhost:3000/LABO3   Pagina Laboratorio 3
//http://localhost:3000/LABO4   Pagina Laboratorio 4

const http = require('http');
const fs = require('fs');
const url = require('url');

// archivos
const labo1 = fs.readFileSync(`${__dirname}/Prueba/LABO1.html`, 'utf-8');
const labo3 = fs.readFileSync(`${__dirname}/Prueba/LABO3.html`, 'utf-8');
const labo4 = fs.readFileSync(`${__dirname}/Prueba/LABO4.html`, 'utf-8');

const server = http.createServer( (request, response) => {
  console.log(request.method, request.url);

    if (request.url === '/LABO1') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(labo1);
    }

    else if (request.url === '/LABO3'  && request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(labo3);
    }

    else if (request.method == 'POST' && request.method === 'POST'){
      console.log("POST");
      let datos = []; //Envio de datos

      request.on('data', (dato) => {
        datos.push(dato);
        datos.push(dato);
      });

      return request.on('end', () => {
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString(); //Buffer

        fs.appendFileSync(`${__dirname}/Prueba/Prueba.txt`, `\n${datos}`);
        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.end(labo3);
      });//Return
    }//else if

    else if (request.url === '/LABO4'){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(labo4);
    }

    else if (request.url === '/style.css'){
      fs.createReadStream(`${__dirname}/Prueba${url}`).pipe(response);
    }

    else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write('<!DOCTYPE html>');
      response.write('<html><head>');
      response.write('<meta charset="utf-8">');
      response.write('<title>Chunchunmaru | Not found</title>');
      response.write('</head><body>');
      response.write('<h1 id="principal">Este Chunchunmaru no existe, amigo.</h1>');
      response.write('</body>');
      response.end();
    }
});

server.listen(3000);
