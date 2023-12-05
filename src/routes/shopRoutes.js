const express = require('express');
const router = express.Router();


router.get('/shop',(req, res)=> res.send('Route for shop view'));
router.get('/shop/item/:id',(req, res)=> res.send('Route for find and retrieve a product from an id'));
router.post('/shop/item/:id/add',(req, res)=> res.send('Route for  add the current item to the shop cart'));
router.get('/shop/cart',(req, res)=> res.send('Route for cart view'));
router.post('/shop/cart',(req, res)=> res.send('Route for the shop cart view'));







module.exports = router;





const express = require('express');
const router = express.Router();

const {
  shopView,
  detailView,
  addItemToCart,
  cartView,
  checkout,
} = require('../controllers/shopControllers');

router.get('/', shopView);
router.get('/item/:id', detailView);
router.post('/item/:id/add', addItemToCart);
router.get('/cart', cartView);
router.post('/cart', checkout);

module.exports = router;