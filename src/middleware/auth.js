'use strict'

const User = require('../model/user/schema.js');

module.exports = (capability)


function _authBasic(str) {
    let base64Buffer = Buffer.from(str, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = { username, password};

    return User.authenticateBasic(auth)
        .then(user => _authenticate(user))
}