//cd "Labo8"
//node ./app.js   ejecutar
//http://localhost:3000/   Pagina

// archivos
const labo1 = fs.readFileSync(`${__dirname}/public/LABO1.html`, 'utf-8');
const labo3 = fs.readFileSync(`${__dirname}/public/LABO3.html`, 'utf-8');
const labo4 = fs.readFileSync(`${__dirname}/public/LABO4.html`, 'utf-8');

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();

const server = http.createServer( (request, response) => {
  console.log(request.method, response.url);

    if (request.url === '/LABO1') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(labo1);
    }

    else if (request.url === '/LABO2') {
      if (request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(labo2);
      }

      else if (request.method == 'POST'){
        console.log("POST");
        let datos = []; //Envio de datos

        response.on('data', (dato) => {
          datos.push(dato);
        }).on('end', () => {

        console.log(datos);
        datos = Buffer.concat(datos).toString(); //Buffer
        fs.appendFileSync(`${__dirname}/data/informes.txt`, `\n${datos}`);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(labo2);
      });
    }

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
