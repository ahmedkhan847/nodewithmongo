var User = require("./user");
var helpers = require("../helpers/")({});
module.exports = function() {
  var userModel = {};

  userModel.saveUser = function(params, callback) {
    var data = {
      firstName: params.body.firstName,
      lastName: params.body.lastName,
      email: params.body.email,
      password: helpers.bcrypt.hashSync(params.body.password, 10)
    };
    var user = new User(data);
    user.save(function(err, saved) {
      if (err) {
        callback(null, { status: false, error: err });
      }
      callback(null, { status: true, data: saved });
    });
  };

  userModel.signInUser = function(params, callback) {
    User.findOne(
      {
        email: params.body.email
      },
      function(err, user) {
        if (err) {
          callback(null, { status: false, error: err });
        }
        if (!user) {
          callback(null, {
            status: false,
            error: { message: "Incorrect Email or Password" }
          });
        }
        if (!helpers.bcrypt.compareSync(params.body.password, user.password)) {
          callback(null, {
            status: false,
            error: { message: "Incorrect Email or Password" }
          });
        }

        var token = helpers.jwt.sign({ user: user }, "secret", {
          expiresIn: 7200
        });
        callback(null, {
          status: true,
          data: { message: "success", token: token, userId: user._id }
        });
      }
    );
  };
  return userModel;
};
