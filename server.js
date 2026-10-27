
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.get("/",(req, res)=>{
    res.send("welcome to e-commerce")
})

app.get((req, res)=>{
    res.status(404).send("Page not found");
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
