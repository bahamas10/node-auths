var exec = require('exec');

module.exports = auth;

function auth(user, cb) {
  if (typeof user === 'function') {
    cb = user;
    user = undefined;
  }

  var cmd = ['/usr/bin/auths'];
  if (user) cmd.push(user);
  exec(cmd, function(err, out, code) {
    if (code || err || !out) {
      var error = new Error(err);
      error.code = code;
      cb(err);
    }

    cb(null, out ? out.trim().split(',') : []);
  });
}
