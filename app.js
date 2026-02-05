const express = require("express");

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/products", (req, res) => {
    res.send("Hello World products");
})

app.listen(PORT, () => {
    console.log(`My app is running on port 8080: ${PORT} `)
})