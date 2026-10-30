
const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to e-commerce");
});

// NEW ROUTE: Serve HTML file
app.get("/api/products", (req, res) => {
    res.sendFile(
        path.join(__dirname, "VIEW", "products.html")
    );
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
