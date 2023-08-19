const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tempArchiveSchema = new Schema(
  {
    _id: { type: String, required: true },
    videoTitle: { type: String, required: true },
    channelId: { type: String, required: true },
    channelTitle: { type: String, required: true },
    description: { type: String, required: false },
    publisheTime: { type: String, required: true },
    dateAdded: { type: Date, required: true },
    duration: { type: String, required: true },
    thumbnailHigh: { type: String, required: true },
    userRating: { type: Number, required: true },
  },
  { collection: "tempArchive" }
);

const TempArchive = mongoose.model("tempArchive", tempArchiveSchema);

module.exports = TempArchive;
