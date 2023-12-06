const session = require('cookie-session');
require('dotenv').config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
  });
};

/** Variables de configuración que recibe un session.
* @param resave: indica si se debe volver a guardar la sesión en el almacén de
  sesiones aunque no haya habido cambios en la sesión durante la solicitud.

  @param saveUninitialized: determina si se debe guardar una sesión aunque no se
  haya modificado. El valor true permite que se cree una sesión nueva y se guarde en el almacén de sesiones,
  incluso si no se ha modificado ningún dato en la sesión.**/