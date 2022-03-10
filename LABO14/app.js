const express = require('express');
const bodyParser = require('body-parser');
const rutas_chunchunmaru = require('./routes/chunchunmaru.routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_users = require('./routes/user.routes');

//Para devolver como respuesta un archivo html desde express, se requiere el módulo path, puedes incorporarlo con const path = require('path'); al inicio de tus archivos de código.
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'tesdrcfvgybhunjimkoiouhygturdyesrydctvybunjiouyt68d43a577yb7vc6543s475r6tvy',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//ruta url
app.use('/chunchunmaru', rutas_chunchunmaru);
app.use('/users', rutas_users);

//app.use(bodyParser.urlencoded({extended: false}));


//Middleware
app.use((request, response, next) => {
    console.log('Refresh');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.listen(3000);
