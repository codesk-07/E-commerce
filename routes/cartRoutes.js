
const express = require('express');
const router = express.Router();

// GET cart for a particular user
router.get("/:userId", (req, res) => {
    const userId = req.params.userId;

    res.send(`Fetching cart for user with ID: ${userId}`);
});

// POST a product into the user's cart
router.post("/:userId", (req, res) => {
    const userId = req.params.userId;

    res.send(`Adding product to cart for user with ID: ${userId}`);
});

module.exports = router;
