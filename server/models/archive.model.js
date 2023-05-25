const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const archiveSchema = new Schema(
  {
    _id: String,
    videoTitle: String,
    channelId: String,
    channelTitle: String,
    description: String,
    publisheTime: String,
    dateAdded: String,
    duration: String,
    thumbnailHigh: String,
    userRating: Number,
  },
  { collection: "archive" }
);

const Archive = mongoose.model("archive", archiveSchema);

module.exports = Archive;
