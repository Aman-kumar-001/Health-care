const router = require('express').Router();
const {getRegister, getLogin} = require('../controller/UserController.js')



router.get('/register' , getRegister);
router.post('/login' , getLogin);


module.exports = router;
