const express = require('express');
const morgan = require('morgan');
const app = express()   //instancia de express
const bodyParser = require('body-parser');
const apiRouter = require('./routes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('dev'));  //middleware morgan para detectar peticiones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

//Manejja todas las peticiones que vengan por la rama de ruta  url/api
app.use('/api', apiRouter);

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = app;