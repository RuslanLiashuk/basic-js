const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof(members) !== 'object'  || members === undefined || members === null) return false;
  let NAMES = '';
  for (let i = 0; i < members.length; i++) { 
    if (typeof(members[i]) === 'string') { 
    NAMES += members[i].trim().toUpperCase().split('')[0];
  }
}
  return NAMES.split('').sort().join('');
};
