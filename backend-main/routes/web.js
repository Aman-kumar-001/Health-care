const router = require('express').Router();
const getProduct = require('../controller/shopController.js');
const {getRegister, getLogin} = require('../controller/UserController.js')
const  {addCart , updateCart , deleteCart , getAll}  = require('../controller/cartController.js')


//register 
router.get('/register' , getRegister);

//login
router.post('/login' , getLogin);

//shop listing
router.get('/item' , getProduct);

//add to cart
router.post('/addCart' , addCart);

//update 
router.put('/updateCart/:id' , updateCart);

//delete cart
router.delete('/delte/:id' , deleteCart);

//get all doc
router.get("/getall" , getAll);





module.exports = router;
