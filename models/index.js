var User = require("./userModel")();
var Message = require("./messageModel")();
// console.log(User.saveRecord(""));
module.exports = function() {
  var models = {};

  models.User = User;
  models.Message = Message;
  return models;
};
