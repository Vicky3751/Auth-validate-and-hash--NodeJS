const express = require("express");

const router = express.Router();

router.use("/", require("../controllers/homepage"));
router.use("/register", require("../controllers/register"));
router.use("/login", require("../controllers/login"));

module.exports = router;
