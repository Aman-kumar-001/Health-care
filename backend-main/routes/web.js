const router = require('express').Router();
const getProduct = require('../controller/shopController.js');
const {getRegister, getLogin} = require('../controller/UserController.js')
const  {addCart , updateCart , deleteCart , getAll}  = require('../controller/cartController.js')



router.get('/register' , getRegister);

router.post('/login' , getLogin);

router.get('/item' , getProduct);

router.post('/addCart' , addCart);

router.put('/updateCart/:id' , updateCart);

router.delete('/updateCart/:id' , deleteCart);

router.get("/getall" , getAll)





module.exports = router;
