const express = require ('express');
const app = express();
const PORT = 4001;
const charactersRoutes = require('./src/routes/charactersRoutes');



app.get('/', (req, res) => res.send ('HOLa mundo desde node'))

app.use('/',charactersRoutes)

//aplicacion escuchando- al puerto despues con el tema de BD hay que ocultar
app.listen(PORT,()=> console.log(`servidor corriendo en http://localhost:${PORT}`));