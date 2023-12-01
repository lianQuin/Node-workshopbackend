const express = require ('express');
const app = express();
const PORT = 4001;




app.get('/', (req, res) => res.send ('HOLa mundo desde node'))

//aplicacion escuchando- al puerto despues con el tema de BD hay que ocultar
app.listen(PORT,()=> console.log(`servidor corriendo en http://localhost:${PORT}`));