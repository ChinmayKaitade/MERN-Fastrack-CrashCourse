const express = require("express");
const { getData, sayHello } = require("../controllers/authControllers");
const router = express.Router();

// another method
// const router = require("express").Router();

router.get("/hello", sayHello);
router.get("/data", getData);

// export router
module.exports = router;
