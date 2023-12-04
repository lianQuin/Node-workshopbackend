//aca toda la logica que tenga que ver con la creacion de nuestro servidor web

const express = require ('express');//estamos llamando a la libreria para poder crear el servidor,
const app = express();//usando todos los metodos de express-monta el server
const PORT = 4000;//esto va en el archivo secreto .env


//mildewere a nivel aplicacion
app.use(express.static('public_html'));

//ruta definida, con esta informacion lo configuramos- una ruta y un puerto)
app.get('/', (req, res) => res.send (''))



//aplicacion escuchando- al puerto despues con el tema de BD hay que ocultar
app.listen(PORT,()=> console.log(`servidor corriendo en http://localhost:${PORT}`));