const express = require("express");
const router = express.Router();
const validateForm  = require("../middleware/formMiddleware")
const userController = require("../controllers/userController");


router.post("/signup" , validateForm , userController.postSignup)
router.post("/login" , userController.loginpost)

module.exports = router