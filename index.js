//aca toda la logica que tenga que ver con la creacion de nuestro servidor web
const express = require('express');//estamos llamando a la libreria para poder crear el servidor,
const app = express();//usando todos los metodos de express-monta el server
const path = require('path');//esto es para subir a vercel
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();

/* Import de la rutas */

const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const authRoutes = require('./src/router/authRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

const PORT = process.env.PORT || 3000;//esto va en el archivo secreto .env

/* Define carpeta de archivos estáticos */
//mildewere a nivel aplicacion, ESTE SE QUEDA PARA CSS
app.use(express.static(path.resolve(__dirname, "public")));

/* User Session */

app.use(initSession());
app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  next();
});

/* Configuración del Template Engine - EJS */

app.set('view engine', 'ejs');
//ruta absoluta para vercel
app.set('views', path.resolve(__dirname, "./src/views"));

/* Parsea los datos recibidos por POST */
//midelwere para formularios extended para formularios simples,toma los datos del formulario
app.use(express.urlencoded());
app.use(express.json());

/* Override para habilitar métodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Rutas de la aplicación */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use(notFoundPage);

app.listen(PORT, () => console.log(` Servidor corriendo en: http://localhost:${PORT}`))