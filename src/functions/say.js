'use strict'
module.exports = {
  func_name: "say",
  func_func: async (message, args, funcObj, commandName) => {
    await message.channel.send(funcObj.message);
  }
}