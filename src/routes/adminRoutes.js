
const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/auth');

const controllers = require('../controllers/adminControllers');

router.use(isLogged);
// lo que esta metido entre /  dentro de la ruta son los params son los pathparams - los queryparams son los que viajan van con ? clave=valor
router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images', 2), controllers.createItem);
router.post('/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);
//presta atencion a las bastick las comillas
//tengo que exportar y despues crear un midelwer en app que tome el router y le diga que esas rutas existen y que puede buscarlas

module.exports = router;