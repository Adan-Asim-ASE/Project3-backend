const express = require('express');
const router = express.Router();
const controller = require("../controllers/users.controller.js");


router.post("/", controller.createUser);
router.post("/:email", controller.findUser);

module.exports = router
