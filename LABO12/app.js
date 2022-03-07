const express = require('express');
const bodyParser = require('body-parser');
const rutas_capybaras = require('./routes/chunchunmaru.routes');

//Para devolver como respuesta un archivo html desde express, se requiere el módulo path, puedes incorporarlo con const path = require('path'); al inicio de tus archivos de código.
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//ruta url
app.use('/capybaras', rutas_capybaras);

//Middleware
app.use((request, response, next) => {
    console.log('Refresh');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.listen(3000);
