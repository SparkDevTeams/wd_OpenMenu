'use strict';
var envs = require('./env.js');

module.exports = {
  db: {
    // url: 'mongodb://mongo',
    host: 'localhost',
    port: 27017,
    database: 'db',
    name: 'db',
    connector: 'mongodb',
  },
  s3: {
    name: 's3',
    connector: 'loopback-component-storage',
    provider: 'amazon',
    key: envs.aws_key,
    keyId: envs.aws_keyid,
  },
};
