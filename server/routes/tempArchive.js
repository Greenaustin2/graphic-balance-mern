const router = require("express").Router();
let TempArchive = require("../models/tempArchive.model");

router.route("/table").get((req, res) => {
  console.log("express router get request");
  var sortCriteria = {};
  sortCriteria[req.query.sortKey] = req.query.sortDirection;
  TempArchive.find()
    .sort(sortCriteria)
    .then((archive) => res.json(archive))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
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

  const newArchive = new TempArchive({
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
  });

  newArchive
    .save()
    .then(() => res.json("Archive Added!"))
    .catch((err) => res.status(400).json("Errorororororororo: " + err));
});

router.route("/:id").delete((req, res) => {
  TempArchive.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
