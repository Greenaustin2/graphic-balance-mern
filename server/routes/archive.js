const router = require("express").Router();
let Archive = require("../models/archive.model");

router.route("/").get((req, res) => {
  console.log("express router get request");
  Archive.find()
    .then((archive) => res.json(archive))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const _id = req.body._id;
  const videoTitle = req.body.videoTitle;
  const channelId = req.body.channelId;
  const channelTitle = req.body.channelTitle;
  const description = req.body.description;
  const publisheTime = req.body.publisheTime;
  const dateAdded = req.body.dateAdded;
  const duration = req.body.duration;
  const thumbnailHigh = req.body.thumbnailHigh;
  const userRating = req.body.userRating;
  // const newArchive = new Archive();
  // newArchive._id = _id;
  // newArchive.videoTitle = videoTitle;
  // newArchive.channelId = channelId;
  // newArchive.channelTitle = channelTitle;
  // newArchive.description = description;
  // newArchive.publisheTime = publisheTime;
  // newArchive.dateAdded = dateAdded;
  // newArchive.duration = duration;
  // newArchive.thumbnailHigh = thumbnailHigh;
  // newArchive.userRating = userRating;

  const newArchive = new Archive({
    _id,
    videoTitle,
    channelId,
    channelTitle,
    description,
    publisheTime,
    dateAdded,
    duration,
    thumbnailHigh,
    userRating,
    // _id: req.body._id,
    // videoTitle: req.body.videoTitle,
    // channelId: req.body.channelId,
    // channelTitle: req.body.channelTitle,
    // description: req.body.description,
    // publisheTime: req.body.publisheTime,
    // dateAdded: req.body.dateAdded,
    // duration: req.body.duration,
    // thumbnailHigh: req.body.thumbnailHigh,
    // userRating: req.body.userRating,
  });

  newArchive
    .save()
    .then(() => res.json("Archive Added!"))
    .catch((err) => res.status(400).json("Errorororororororo: " + err));
});

module.exports = router;
