const express = require('express');
const router = express.Router();


router.get('/auth/login',(req, res)=> res.send('Route for auth login view'));
router.post('/auth/login',(req, res)=> res.send('Route for XD  '));
router.get('/auth/register',(req, res)=> res.send('Route for cart view'));
router.post('/auth/register',(req, res)=> res.send('Route for the shop cart view'));
router.get('/auth/logout',(req, res)=> res.send('Route for XD  '));






module.exports = router;



const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const {
  loginView,
  loginUser,
  registerView,
  registerUser,
  logoutUser
} = require('../controllers/authControllers');

const loginValidation = [
  body('email')
  .isEmail()
  .withMessage('Necesito que ingrese un correo válido'),
  body('password')
   .isLength({ min: 6})
   .isAlphanumeric()
   .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];

router.get('/login', loginView);
router.post('/login', loginValidation, validateInput, loginUser);
router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/logout', logoutUser);


module.exports = router;


