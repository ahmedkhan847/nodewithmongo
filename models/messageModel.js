var Message = require("./message");
var User = require("./user");
var helpers = require("../helpers/")({});

module.exports = function() {
  var messageModel = {};

  messageModel.saveMessage = function(req, callback) {
    // console.log(req);
    var decoded = helpers.jwt.decode(req.query.token);

    User.findById(decoded.user._id, function(err, user) {
      if (err) {
        callback(null, { status: false, error: err });
      }
      var message = new Message({
        content: req.body.content,
        user: user
      });
      message.save(function(err, saved) {
        if (err) {
          callback(null, { status: false, error: err });
        }

        user.messages.push(saved);
        user.save();

        callback(null, { status: true, data: saved });
      });
    });
  };

  messageModel.findMessage = function(params, callback) {
    Message.findOne(params, function(err, user) {
      if (err) {
        callback(null, { status: false, error: err });
      }
      callback(null, { status: true, data: saved });
    });
  };

  messageModel.getAllMessages = function(params, callback) {
    Message.find().populate('user','firstName').exec(function(err, messages) {
      if (err) {
        callback(null, { status: false, error: err });
      }
      callback(null, { status: true, data: messages });
    });
  };

  messageModel.updateMessage = function(req, callback) {
    var decoded = helpers.jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, messages) {
      if (err) {
        callback(null, { status: false, error: err });
      }

      if (messages.user != decoded.user._id) {
        callback(null, {
          status: false,
          error: {message : "User is not Authorized to send message"}
        });
      }

      messages.content = req.body.content;
      messages.save(function(err, saved) {
        if (err) {
          callback(null, { status: false, error: err });
        }
        callback(null, { status: true, data: saved });
      });
    });
  };

  messageModel.deleteMessage = function(req, callback) {
    
    var decoded = helpers.jwt.decode(req.query.token);
    
    Message.findById(req.params.id, function(err, messages) {
      if (err) {
        callback(null, { status: false, error: err });
      }

      if (messages.user != decoded.user._id) {
        callback(null, {
          status: false,
          error: {message : "User is not Authorized to send message"}
        });
      }

      messages.remove(function(err, saved) {
        if (err) {
          callback(null, { status: false, error: err });
        }
        callback(null, { status: true, data: saved });
      });
    });
  };

  return messageModel;
};
