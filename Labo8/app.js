//cd "Labo8"
//node ./app.js   ejecutar
//http://localhost:3000/   Pagina

console.log("hola desde node");

//fs: filesystem
//Problema 1
function promedio(arreglo){
    let suma = 0;
    for(let i of arreglo){
        suma += i;
    }
    return suma/(arreglo.length);
}

//Problema 2
const text = (cadena) => {
    const filesystem = require('fs')
    filesystem.writeFileSync('hola.txt', cadena)
}

//Problema 3
//Genera un array de números aleatorios, ordenalos y muéstralos en una lista desordenada.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function ordenar() {
    let array = [];
    //Se rellena el arreglo con numeros aleatorios
    for (let i = 0; i < 10; i++) {
        array.push(getRandomInt(1, 100));
    }
    console.log("Array sin ordenar");
    console.log(array);
    array.sort(function (a, b) { return a - b });
    console.log("Array ordenado");
    console.log(array);
}

const arreglo = [16, 95, 34, 84, 29, 74, 18, 46, 54, 41];

promedio(arreglo);
text("Hola mundo :)");
ordenar();

// Petición al servidor que devuelve laboratorio 1
const http = require('http')
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
    fs.readFile("../LABO1 HTML/LABO1.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
})

server.listen(3000)
