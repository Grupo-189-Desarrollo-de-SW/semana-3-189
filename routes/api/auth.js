const router = require('express').Router();
const authController= require('../../controller/AuthController')

router.post('/signin', authController.signin);  //Manejador de ruta /api/auth/signin

module.exports= router;