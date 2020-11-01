const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};

  let turn = 2 ** disksNumber - 1;
  let turnTime = Math.floor((3600/turnsSpeed)*turn)

  obj.turns = turn;
  obj.seconds = turnTime;

return obj;
};
