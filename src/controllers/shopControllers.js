const ItemsService = require('../services/itemServices');


module.exports = {
  shopView:  async (req, res) => {
    const items = await ItemsService.getAllItems();
    const { data } = items;
    res.render( './shop/shop',{
      view: {
        title: "Shop | Funkoshop"
      },
      items: data
    });
  },
  detailView: async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    const { data } = item;

    if (!data[0]) {
      res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    }

    res.render('./shop/detail', {
      view: {
        title: "Item | Funkoshop"
      },
      item: data[0]
    });
  },
  /* Esta es la ruta para agregar un artículo al carrito de compras.*/
  addItemToCart: (req, res) => res.send('Ruta para agregar un artículo al carrito'),
  /*Esta es la ruta para ver el carrito de compras*/
  cartView: (req, res) => res.send('Ruta de vista del carrito'),
/*Esta es la ruta para recibir los productos seleccionados del carrito de compras e iniciar el proceso de compra.*/
  checkout: (req, res) => res.send('Ruta para recibir los productos seleccionados e iniciar el proceso de compra'),
};