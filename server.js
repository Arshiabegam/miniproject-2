const express = require("express");
const mongoose = require("mongoose");

const donationRoutes = require("./routes/donationRoutes");

const app = express();

app.use(express.json());

app.use("/donations", donationRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/donationDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Donation Management API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});