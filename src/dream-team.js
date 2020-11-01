module.exports = function createDreamTeam(members) {
    let arr = [];
    if (Array.isArray(members) === false) {
      return false;
    } else {
      for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
            arr.push(members[i].toUpperCase().trim().slice(0, 1));
        }
      }
      return(arr.sort().join(''));
    }
  }