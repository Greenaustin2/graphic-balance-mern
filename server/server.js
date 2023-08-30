const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
var sslRedirect = require("heroku-ssl-redirect");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(sslRedirect());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas connection established");
});

const archiveRouter = require("./routes/archive");
const tempArchiveRouter = require("./routes/tempArchive");

app.use("/archive-data", archiveRouter);
app.use("/temp-archive", tempArchiveRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
