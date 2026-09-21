const express = require("express");
const app = express();
app.use(express.json());

app.get("/products", (req, res) => {
  res.json([{ id: 1, name: "Demo widget", price: 900 }]);
});

app.listen(process.env.PORT || 3000);
