'use strict'
const events = require('../events.js');

module.exports = {
  func_name: "array",
  func_func: async (message, args, funcObj, commandName) => {
    events.emit("runFunc", message, args, funcObj.functions, commandName, true);
  }
}