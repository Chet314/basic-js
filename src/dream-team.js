module.exports = function createDreamTeam(members ) {
  return members !== undefined && Array.isArray(members) ? members.filter(member => typeof member  === 'string').map(member => member.trim()).map(member => member[0].toUpperCase()).sort().join('') : false
};
