const router = require('express').Router();
const userController= require('../../controller/UserController');

router.post('/signup', userController.signup);  // Manejador de ruta /api/user/signup
router.get('/showall', userController.showall);   //Manejador de ruta /api/user/showall

module.exports= router;