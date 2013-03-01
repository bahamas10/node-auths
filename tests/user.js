var auths = require('../');
var user = process.argv[2] || 'root';

auths(user, function(err, privileges) {
  if (err) throw err;
  console.log('%s: %s', user, privileges);
});
