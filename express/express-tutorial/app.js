const express = require("express");
const app = express();
const people = require("./routes/people");
const products = require("./routes/products");
const auth = require("./routes/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", auth);
app.use("/api/people", people);
app.use("/api/products", products);

app.listen(5000, () => {
  console.log("listening to 5000");
});
