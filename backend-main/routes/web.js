const router = require('express').Router();
const getProduct = require('../controller/shopController.js');
const {getRegister, getLogin} = require('../controller/UserController.js')
const  addCart  = require('../controller/cartController.js')



router.get('/register' , getRegister);
router.post('/login' , getLogin);
router.get('/item' , getProduct);
router.post('/addCart' , addCart);


module.exports = router;
