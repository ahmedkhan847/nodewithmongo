var express = require("express");
var router = express.Router();
var models = require("../models/")();
var helpers = require("../helpers/")({ models: models });

router.post("/", function(req, res, next) {
  helpers.Sync(function() {
    var result = models.User.saveUser.sync(null, req);
    var statusCode = 200;

    if (!result.status) {
      statusCode = 500;
    }

    res.status(statusCode).json(result);
  });
});

router.post("/signin", function(req, res, next) {
  helpers.Sync(function() {
    var result = models.User.signInUser.sync(null, req);
    var statusCode = 200;

    if (!result.status) {
      statusCode = 401;
    }

    res.status(statusCode).json(result);
  });
});

router.get("/message", function(req, res, next) {
  res.render("node");
});
module.exports = router;
