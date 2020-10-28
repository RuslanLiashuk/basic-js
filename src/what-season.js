const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if ((date instanceof Date) === false || date.getTime() === false ) throw new Error();
  let dateMonth = date.getMonth();
  if (dateMonth > 1 && dateMonth < 5 ) return 'spring';
  else if (dateMonth > 4 && dateMonth < 8) return 'summer';
  else if (dateMonth > 7 && dateMonth < 11) return 'autumn';
  else return 'winter'; 
};
