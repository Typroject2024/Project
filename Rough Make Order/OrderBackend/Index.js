// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/orders", (req, res) => {
  const orderData = req.body;
  // Here you can handle the order data, e.g., save it to a database
  console.log("Received order:", orderData);
  // Send a response to the client
  res.send("Order received successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
