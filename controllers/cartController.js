const AppError = require("../utils/AppError");
const cartService = require("../services/cartService");

const getCart = (req, res) => {

    const userId = req.params.userId;

    const result = cartService.getCart(userId);

    if (!result) {
        throw new AppError("Cart not found", 404);
    }

    res.status(200).json({
        success: true,
        data: result
    });

};

module.exports = {
    getCart
};