const db = require("../models");
var bcrypt = require("bcryptjs");

// url/api/user/showall
exports.showall = async (req, res, next) => {
  try {
    const user = await db.user.findAll(); //consulta todos los usuarios
    res.status(200).json(user);  //Devuelve todos los usuarios
  } catch (error) {
    res.status(500).send({
      message: "Error",
    });
    next(error);
  }
};

// url/api/user/signup
exports.signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hashSync(req.body.password, 10); //10 numero de veces que encriptara la contraseña
    const user = await db.user.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error",
    });
    next(error);
  }
};
