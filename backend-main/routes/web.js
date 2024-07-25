const router = require('express').Router();
const {getRegister, getLogin} = require('../controller/UserController.js')



router.get('/register' , getRegister);
router.get('/login' , getLogin);


module.exports = router;
