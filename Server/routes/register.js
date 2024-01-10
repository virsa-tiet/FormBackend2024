const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/reg_controller");
const signupSchema = require("../validators/reg_validator");
const validate = require("../middleware/validator");


router.route("/")
    .get(home)
    .post(validate(signupSchema), register);

module.exports = router;