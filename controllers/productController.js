
const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
};

const getProductById = (req, res) => {
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.send(result);
};

const addProduct = (req, res) => {

    const productName = req.body.productName;

    console.log("Product received:", productName);

    if (!productName || !productName.trim()) {
        return res.status(400).json({
            message: "Product name is required"
        });
    }

    const result = productService.addProduct(productName.trim());

    res.status(201).json({
        message: "Product added successfully",
        product: result
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};
