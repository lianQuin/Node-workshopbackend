const express = require('express');
const app = express();
const PORT =  3000;
const path = require('path');
const methodOverride = require('method-override');


/* Import de la rutas */

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');



/* Define carpeta de archivos estáticos */

app.use(express.static("public"));


/* Configuración del Template Engine - EJS */

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./src/views"));

/* Parsea los datos recibidos por POST */

app.use(express.urlencoded());
app.use(express.json());

/* Override para habilitar métodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Rutas de la aplicación */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

//app.use(notFoundPage);

app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))
