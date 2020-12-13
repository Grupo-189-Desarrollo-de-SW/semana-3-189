//ARCHIVO MANEJADOR DE LAS RUTAS

const router = require('express').Router();

const apiRouterAuth = require('./api/auth');
const apiRouterUsers = require('./api/users');

router.use('/auth', apiRouterAuth);  //Manejador de ruta  /api/auth
router.use('/user', apiRouterUsers);  //Manejador de ruta /api/user

module.exports =router;