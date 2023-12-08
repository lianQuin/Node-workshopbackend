const LicenceService = require('../services/licenceService');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: licences.data
    });
  },
  /*Esta es la ruta para ver la página de contacto*/
  contactView:(req, res) => res.send('Ruta de vista de contacto'),
  /* Esta es la ruta para ver la página de acerca de*/
  aboutView:(req, res) => res.send('Ruta de vista de acerca de'),
  /* Esta es la ruta para ver la página de preguntas frecuentes.*/
  faqsView:(req, res) => res.send('Ruta de vista de preguntas frecuentes'),
};

/*este es el ejemplo del profe:const modelProduct = require("../models/Product");

const index = (req, res) => {
  res.render("inicio");
};

const shop = async (req, res) => {
  try {
    const productos = await modelProduct.findAll({
      include: "Category",
    });
    res.render("shop", { productos });
  } catch (error) {
    res.status(500).send(error);
  }
};

const addCart = (req, res) => {
  if (!req.session.cart) {
    const cart = {
      items: [],
    };

    req.session.cart = cart;
  }

  console.log(req.session.cart.items);

  const index = req.session.cart.items.findIndex(
    (item) => item.id == req.params.id
  );

  if (index != -1) {
    req.session.cart.items[index].cantidad++;
  } else {
    req.session.cart.items.push({ id: req.params.id, cantidad: 1 });
  }

  // delete req.session.cart
  // req.session.cart = null;

  console.log(req.params.id, req.session.cart?.items);
  res.send("Cart add");
};

module.exports = {
  index,
  shop,
  addCart,
}; */

