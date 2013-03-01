var auths = require('../');

auths(function(err, privileges) {
  if (err) throw err;
  console.log(privileges);
});
