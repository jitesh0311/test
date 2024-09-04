const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/user");
const connectDB = require("./DB/connect");
const dashboardRoutes = require("./routes/dashboard")
const authMiddleware = require("./middleware/authenticate")

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/",authMiddleware, dashboardRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
