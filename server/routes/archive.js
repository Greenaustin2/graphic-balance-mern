const router = require("express").Router();
let Archive = require("../models/archive.model");

router.route("/").get((req, res) => {
  Archive.find()
    .then((archive) => res.json(archive))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const archive = req.body.archive;
  const newArchive = new Archive({ archive });

  //   router.route("/:id").get((req, res) => {
  //     Archive.findById(req.params.id)
  //       .then((archive) => res.json(exercise))
  //       .catch((err) => res.status(400).json("Error: " + err));
  //   });

  //   router.route("/:id").delete((req, res) => {
  //     Archive.findByIdAndDelete(req.params.id)
  //       .then(() => res.json("Archive deleted."))
  //       .catch((err) => res.status(400).json("Error: " + err));
  //   });

  //   router.route("/update/:id").post((req, res) => {
  //     Archive.findById(req.params.id).then((archive) => {});
  //   });

  newArchive
    .save()
    .then(() => res.json("Archive Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
