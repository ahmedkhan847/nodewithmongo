var Sync = require('sync');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
module.exports = function (options) {
    var helpers = {};

    try {
        if (typeof (options) == "object") {
            // helpers.httpauth = httpauth(options.models);
        }


    } catch (e) {
        console.log("Error at helper options requried but not defined")
    }
    try {
        if (typeof(options.models) == 'object') {
            helpers.models = options.models;
        }
    } catch (e) {
        console.log(e)
    }
    helpers.Sync = Sync;
    helpers.bcrypt = bcrypt;
    helpers.jwt = jwt;
    return helpers;
};