//aca toda la logica que tenga que ver con la creacion de nuestro servidor web

const express = require ('express');//estamos llamando a la libreria para poder crear el servidor,
const app = express();//usando todos los metodos de express-monta el server
const PORT = 4000;//esto va en el archivo secreto .env
const expressLayouts= require("express-ejs-layouts");

const mainRoutes = require  ('./src/routes/mainRoutes');
const shopRoutes = require  ('./src/routes/shopRoutes');
const adminRoutes = require ('./src/routes/adminRoutes');
const authRoutes = require ('./src/routes/authRoutes');

//esto ya es la mission 5
app.set("view engine", "ejs");
app.set('views', './src/views')
app.use(expressLayouts);
app.set("layout", "layouts/layout");

//mildewere a nivel aplicacion
app.use(express.static('public_html'));

app.use('/',mainRoutes);
app.use('/',shopRoutes);
app.use('/',adminRoutes);
app.use('/',authRoutes);




//aplicacion escuchando- al puerto despues con el tema de BD hay que ocultar
app.listen(PORT,()=> console.log(`servidor corriendo en http://localhost:${PORT}`));