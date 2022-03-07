const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_libros = require('./routes/libros.routes');

//http://localhost:3000/libros
app.use('/libros', rutas_libros);

//Middleware
app.use((request, response, next) => {
    //console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//http://localhost:3000/ cualquier otra cosa = error
app.use((request, response, next) => {
    //console.log('Otro middleware!');
    response.send('Error 404'); //Manda la respuesta
});

app.listen(3000);
