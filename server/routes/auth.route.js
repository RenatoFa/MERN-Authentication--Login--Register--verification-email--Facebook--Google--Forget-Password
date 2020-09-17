const express = require("express");
const router = express.Router();


// Validation import at /valid

const{
    validLogin,
    validRegister,
    forgotPasswordValidator,
    resetPasswordValidator
    

} = require('../helpers/valid')

// Carregamento dos Controllers

const {
    registerController, activationController
} = require('../controllers/auth.controller.js')


router.post('/register',validRegister,registerController)
router.post('/activation',activationController)



module.exports = router