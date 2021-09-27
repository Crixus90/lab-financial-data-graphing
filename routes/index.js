const router = require("express").Router();
const { default: axios } = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
