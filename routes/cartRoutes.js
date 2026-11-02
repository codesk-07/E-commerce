
const express = require("express");
const router = express.Router();

const { getCart } = require("../controllers/cartController");

router.get("/:userId", getCart);

module.exports = router;
