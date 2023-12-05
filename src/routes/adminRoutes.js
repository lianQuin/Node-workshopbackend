const express = require ('express');
const router = express . Router();


router.get('/admin',(req,res) => res.send('en teoria tendria que devolver lo de admin'));
router.get('/admin/create',(req,res)=> res.send('en teoria tendria que devolver lo de admin con un id llamado create?para crear un nuevo admin'))
router.post('/admin/create',(req, res) => res.send('en teoria yo tendria que enviar los datos para crear un nuevo admin'));
// lo que esta metido entre /  dentro de la ruta son los params son los pathparams - los queryparams son los que viajan van con ? clave=valor
router.get('/admin/edit/:id', (req, res) => { 

    const id = req.params.id; 
//presta atencion a las bastick las comillas
   res.send(`en teoria yo tendria que devolver para editar el admin con el id: ${id} `) 
});
// lo que esta metido entre /  dentro de la ruta son los params son los pathparams - los queryparams son los que viajan van con ? clave=valor
router.put('/admin/edit/:id', (req, res) => { 

    const id = req.params.id; 
//presta atencion a las bastick las comillas
   res.send(`en teoria yo tendria que  borrar los datos del id correspondiente que responda al id: ${id} `) 
});
router.delete('/admin/delete/:id',(req, res) => res.send('en teoria yo tendria que enviar los datos para eleminar un nuevo admin en funcion del id proporcionado'));



//tengo que exportar y despues crear un midelwer en app que tome el router y le diga que esas rutas existen y que puede buscarlas

module.exports = router;



const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/auth');

const controllers = require('../controllers/adminControllers');

router.use(isLogged);

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images', 2), controllers.createItem);
router.post('/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);

module.exports = router;