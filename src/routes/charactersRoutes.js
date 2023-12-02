//aca van a estar las rutas de las api del manejo de los datos
const express = require ('express');
const router = express .Router();//a este rauter despues lo vamos a leer desde app


router.get('/characters', (req, res) => res.send('en teoria yo tendria que devolver todos los carateres'));
//ruta para un solo caracter
// lo que esta metido entre /  dentro de la ruta son los params son los pathparams - los queryparams son los que viajan van con ? clave=valor
router.get('/character/:id', (req, res) => { 

     const id = req.params.id; 
//presta atencion a las bastick las comillas
    res.send(`en teoria yo tendria que devolver todos los carateres con el id: ${id} `) 
});


router.post('/character/create',(req, res) => res.send('en teoria yo tendria que enviar los datos para crear un nuevo character'));


router.delete('/character/:id/delete',(req, res) => res.send('en teoria yo tendria que enviar los datos para eleminar un nuevo character en funcion del id proporcionado'));


//tengo que exportar y despues crear un midelwer en app que tome el router y le diga que esas rutas existen y que puede buscarlas

module.exports = router;