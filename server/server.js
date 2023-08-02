const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://graphic-balance-mern.vercel.app",
    credentials: true, // Allow sending cookies and authentication headers
    methods: "GET, POST, PUT, DELETE", // Specify allowed HTTP methods
    allowedHeaders: "Authorization, Content-Type", // Specify allowed headers
  })
);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas connection established");
});

const archiveRouter = require("./routes/archive");
app.use("/archive-data", archiveRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
//   });
// }
