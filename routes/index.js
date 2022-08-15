var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')


router.get('/allusers',UserController.getAllUsers);
router.get('/allusers/:id',UserController.getUser);
router.post('/adduser',UserController.createUser);
router.get('/deleteuser/:deleteId',UserController.deleteid);
router.post('/update/:updateId',UserController.update);

module.exports = router;
