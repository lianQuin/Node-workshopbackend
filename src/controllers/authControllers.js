const userCredentials = {
    email: 'juan@gmail.com',
    password: 'juan123'
  }
  
  module.exports = {
    loginView:  (req, res) => res.render('./auth/login', {
      view: {
        title: 'Login | Funkoshop'
      }
    }),
    loginUser:  (req, res) => {
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
  
        req.session.isLogged = emailValidation && passwordValidation ? true : false;
  
        if (req.session.isLogged) {
          return res.redirect('/admin');
        }
  
        return res.status(401).send('Credenciales inválidas');
  
    },
    registerView:  (req, res) => res.render('./auth/register', {
      view: {
        title: 'Register | Funkoshop'
      }
    }),
    /* Esta es la ruta para registrar a un usuario. Se activa cuando el usuario hace clic en el botón de registro.*/
    registerUser:  (req, res) => res.send('Ruta de registro que recibe los datos cuando el usuario hace clic en el botón de registro'),
    /*Esta es la ruta para cerrar la sesión de un usuario. Se establece req.session.isLogged en false para indicar que el usuario ya no está conectado, y luego se envía un mensaje al usuario para confirmar que la sesión se ha cerrado con éxito.*/
    logoutUser:  (req, res) => {
      req.session.isLogged = false;
      res.send('Sesión finalizada con éxito.');
    }
  }
  /*este es el modelo  del profe :const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const model = require("../models/User");

const register = (req, res) => {
  res.render("auth/register");
};
const postRegister = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/register", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.create(req.body);

    // console.log(req.body, user);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const login = (req, res) => {
  res.render("auth/login");
};
const postLogin = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/login", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.render("auth/login", {
        values: req.body,
        errors: [{ msg: "El correo y/o contraseña son incorrectos (email)" }],
      });
    } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
      res.render("auth/login", {
        values: req.body,
        errors: [
          { msg: "El correo y/o contraseña son incorrectos (password)" },
        ],
      });
    } else {
      req.session.userId = user.id;

      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const logout = (req, res) => {
  req.session = null;
  res.redirect("/");
};

module.exports = {
  register,
  postRegister,
  login,
  postLogin,
  logout,
}; */