
let products = [];

const getAllProducts = () => {
    return "Fetching all products";
};

const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

const addProduct = (productName) => {

    const newProduct = {
        id: products.length + 1,
        productName: productName
    };

    products.push(newProduct);

    return newProduct;
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};
