const express = require("express");
const router = express.Router();
const user = require('../Controllers/createProfile');
const getUser = require('../Controllers/getUsers');

router.post('/signup' , user.signup)
router.post('/signin' , user.signin)
router.get('/getData/:userId' , getUser.getUserData)
router.put('/updateData' , getUser.updateData)

module.exports = router;
