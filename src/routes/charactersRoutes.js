//aca van a estar las rutas de las api del manejo de los datos
const express = requiere ('express');
const router = express .Router();//a este rauter despues lo vamos a leer desde app


router.get('/characters', (req, res) => res.send('en teoria yo tendria que devolver todos los carateres'));
//ruta para un solo caracter
router.get('/character/:id', (req, res) => res.send('en teoria yo tendria que devolver todos los carateres con el id'));


router.post('/character/create',(req, res) => res.send('en teoria yo tendria que enviar los datos para crear un nuevo character'));


router.delete('/character/:id/delete',(req, res) => res.send('en teoria yo tendria que enviar los datos para eleminar un nuevo character en funcion del id proporcionado'));


//tengo que exportar y despues crear un midelwer en app que tome el router y le diga que esas rutas existen y que puede buscarlas

module.export= router;