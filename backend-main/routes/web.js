const router = require('express').Router();
const {getRegister} = require('../controller/UserController.js')



router.get('/register/:id' , getRegister);


module.exports = router;
