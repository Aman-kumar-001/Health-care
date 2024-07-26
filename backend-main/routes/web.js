const router = require('express').Router();
const getProduct = require('../controller/shopController.js');
const {getRegister, getLogin} = require('../controller/UserController.js')



router.get('/register' , getRegister);
router.post('/login' , getLogin);
router.get('/item' , getProduct);


module.exports = router;
