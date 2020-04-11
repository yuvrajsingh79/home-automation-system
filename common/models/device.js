/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
"use strict";

module.exports = function(Device) {
  Device.greet = function(msg, cb) {
    cb(null, "Greetings... " + msg);
  };

  // just a welcome message with single argument
  Device.remoteMethod("greet", {
    accepts: { arg: "msg", type: "string" },
    returns: { arg: "greeting", type: "string" }
  });
};
