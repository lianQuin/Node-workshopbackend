//este archivo va a gestionar todas las respuestas a las rutras de caractersroutes,aqui necesitamos la logica puedo crear funciones o objetos
const ItemsService = require('../services/itemServices');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');

module.exports = {
  adminView: async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    res.render( './admin/admin',
    {
      view: {
        title: 'List of Products | Admin Funkoshop'
      },
      items: data
    });
  },
  createView:  async (req, res) =>{
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();

    res.render('./admin/create', {
      view: {
        title: 'Create Product | Admin Funkoshop'
      },
      categories,
      licences
    });
  },
  createItem:  async (req, res) => {
    const item = req.body;
    const files = req.files;
    await ItemsService.create(item, files);
    res.redirect('/admin');
  },
  bulkCreate:  async (req, res) => {
    const items = req.body;
    const result = await ItemsService.create(items.map(el => Object.values(el)));
    res.send(result);
  },
  editView:  async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();
    const { data } = await ItemsService.getItem(id);
    console.log(categories, licences);
    res.render('./admin/edit', {
      view: {
        title: `Edit Product #${id} | Admin Funkoshop`
      },
      item: data[0],
      categories,
      licences
    });
  },
  editItem:  async (req, res) => {
    const id = req.params.id;
    const item = req.body;

    await ItemsService.edit(item, id);
    res.redirect('/admin');
  },
  deleteItem:  async (req, res) => {
    const id = req.params.id;

    await ItemsService.delete(id);
    res.redirect('/admin');
  },
};

 /* Este código es un módulo de Node.js que exporta un conjunto de controladores para manejar diferentes rutas en una aplicación web. Aquí te explico cada función:

adminView: Esta función maneja la vista del administrador. Obtiene todos los elementos de ItemsService y los pasa a la vista admin.

createView: Esta función maneja la vista de creación de un nuevo elemento. Obtiene todas las categorías de CategoryService y todas las licencias de LicenceService, y las pasa a la vista create.

createItem: Esta función maneja la creación de un nuevo elemento. Toma los datos del cuerpo de la solicitud y los archivos adjuntos, y los pasa a ItemsService.create() para crear un nuevo elemento. Luego redirige al usuario a la vista del administrador.

bulkCreate: Esta función maneja la creación masiva de elementos. Toma los datos del cuerpo de la solicitud, los convierte en un array de arrays y los pasa a ItemsService.create() para crear los elementos. Luego envía el resultado como respuesta.

editView: Esta función maneja la vista de edición de un elemento. Obtiene el elemento, todas las categorías y todas las licencias, y los pasa a la vista edit.

editItem: Esta función maneja la edición de un elemento. Toma los datos del cuerpo de la solicitud y el ID del elemento, y los pasa a ItemsService.edit() para editar el elemento. Luego redirige al usuario a la vista del administrador.

deleteItem: Esta función maneja la eliminación de un elemento. Toma el ID del elemento y lo pasa a ItemsService.delete() para eliminar el elemento. Luego redirige al usuario a la vista del administrador. */