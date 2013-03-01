auths
=====

Print authorizations granted to a user on an Illumos based operating system

Usage
-----

``` js
var auths = require('auths');

auths(function(err, privileges) {
  if (err) throw err;
  console.dir(privileges);
});
```

yields

``` js
[ 'solaris.device.cdrw',
  'solaris.device.mount.removable',
  'solaris.jobs.user',
  'solaris.mail.mailq',
  'solaris.profmgr.read' ]
```

Function
--------

### `auths([user], callback(err, privileges))`

`user` is optional, and will default to the current running user.
The callback will contain an array of privileges assuming there were no errors.

If there were errors, the first argument will be an `Error` object, with the
message set to stderr of auths(1), and `Error.code` set to the return code.

Installation
------------

    npm install auths

Notes
-----

This module is just a thin wrapper around auths(1).  The path has been hardcoded
to `/usr/bin/auths` to not allow a calling application to do some trickery with
PATH to execute their own version of auths(1).

Put as must trust in this module as you would when shelling out to auths(1).

License
-------

MIT
