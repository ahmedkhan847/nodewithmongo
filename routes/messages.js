var express = require("express");
var router = express.Router();
var models = require("../models/")();
var helpers = require("../helpers/")({});

router.get("/", function(req, res, next) {
  helpers.Sync(function() {
    var data = {
      content: req.body.content
    };
    var result = models.Message.getAllMessages.sync(null, {});
    var statusCode = 200;

    if (!result.status) {
      statusCode = 500;
    }

    res.status(statusCode).json(result);
  });
});

router.use("/", function(req, res, next) {
  helpers.jwt.verify(req.query.token, "secret", function(err, decoded) {
    if (err) {
      return res.status(401).json({
        status: false,
        error: err
      });
    }
    next();
  });
});

router.post("/", function(req, res, next) {
  helpers.Sync(function() {
    var result = models.Message.saveMessage.sync(null, req);

    var statusCode = 200;

    if (!result.status) {
      statusCode = 500;
    }

    res.status(statusCode).json(result);
  });
});

router.patch("/:id", function(req, res, next) {
  helpers.Sync(function() {
    var result = models.Message.updateMessage.sync(null, req);
    var statusCode = 200;

    if (!result.status) {
      statusCode = 401;
    }

    res.status(statusCode).json(result);
  });
});

router.delete("/:id", function(req, res, next) {
  helpers.Sync(function() {
    
    var result = models.Message.deleteMessage.sync(null,req);
    var statusCode = 200;

    if (!result.status) {
      statusCode = 401;
    }

    res.status(statusCode).json(result);
  });
});
module.exports = router;
