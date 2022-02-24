//node ./app.js   ejecutar

console.log ("hola desde node");

//fs. filestream
const filesystem = require("fs");

filesystem.writeFileSync("hola.txt", "hola desde node");

const arreglo = [5000, 60, 90]
