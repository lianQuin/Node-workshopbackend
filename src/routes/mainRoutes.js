//atiende la solicitud de las rutas
const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/home', mainControllers.home);
router.get('/contact',mainControllers.contact);
router.get('/about',mainControllers.about);
router.get('/faqs',mainControllers.faqs);



module.exports = router;




const express = require('express');
const router = express.Router();

const {
  homeView,
  contactView,
  aboutView,
  faqsView,
} = require('../controllers/mainControllers');

router.get('/', homeView);
router.get('/contact', contactView);
router.get('/about', aboutView);
router.get('/faqs', faqsView);

module.exports = router;