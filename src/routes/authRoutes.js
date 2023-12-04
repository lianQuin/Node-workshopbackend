const express = require('express');
const router = express.Router();


router.get('/auth/login',(req, res)=> res.send('Route for auth login view'));
router.post('/auth/login',(req, res)=> res.send('Route for XD  '));
router.get('/auth/register',(req, res)=> res.send('Route for cart view'));
router.post('/auth/register',(req, res)=> res.send('Route for the shop cart view'));
router.get('/auth/logout',(req, res)=> res.send('Route for XD  '));






module.exports = router;


