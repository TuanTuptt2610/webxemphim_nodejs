const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//GET BY TITLE
router.get("/:title", verify, async (req, res) => {
  try {
    var regex = new RegExp(req.params.title.toLowerCase(), "i");

    const movie = await Movie.find({ title: regex });
    movie.length;
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
