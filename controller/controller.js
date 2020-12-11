const config = require("../secret/config.js");
const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = async (req, res,next) => {
  try {
    let user = await db.user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).send("User Not Found."); //El usuario no existe en la bases de datos
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        accessToken: null,
        reason: "Invalid Password!",
      }); //El usuario ingresa una contraseña inválida
    }

    var token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      config.secret,
      {
        expiresIn: 86400, // expires in 24 hours
      }
    );

    //El usuario se loguea exitosamente
    res.status(200).send({ accessToken: token });
    
  } catch (err) {
    res.status(500).send("Error -> " + err);
    next(err);
  }
};
