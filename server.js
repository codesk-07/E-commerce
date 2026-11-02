const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const AppError = require("./utils/AppError");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// HTML GET route
app.get("/api/products", (req, res) => {
    res.sendFile(
        path.join(__dirname, "VIEW", "products.html")
    );
});

app.get("/", (req, res) => {
    res.send("Welcome to e-commerce");
});

// 404 handler
app.use((req, res, next) => {
    next(new AppError(
        `Cannot find ${req.originalUrl} on this server`,
        404
    ));
});

// Centralized error handler (must be last)
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});