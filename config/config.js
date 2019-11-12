/**
 * API configuration
 */

const convict = require('convict');

const config = convict({
  apiPort: {
    doc: 'The port to bind rhe API to.',
    format: 'port',
    default: 5000,
    env: 'API_PORT',
    arg: 'port'
  },
  loglevel: {
    doc: 'The log level.',
    format: ['debug', 'info', 'warn', 'error', 'fail'],
    default: 'debug',
    env: 'API_LOGLEVEL',
    arg: 'loglevel'
  },
  logtype: {
    doc: 'The log type.',
    format: ['stdout', 'file'],
    default: 'stdout',
    env: 'API_LOGTYPE',
    arg: 'logtype'
  },
  logfile: {
    doc: 'The complete log file path.',
    format: '*',
    default: 'api.log',
    env: 'API_LOGFILE',
    arg: 'logfile'
  },
  dbHost: {
    doc: 'MySQL Hostname',
    format: '*',
    default: 'localhost',
    env: 'MySQL_HOST',
    arg: 'mysqlhost'
  },
  dbPort: {
    doc: 'MySQL port',
    format: 'port',
    default: 3306,
    env: 'MySQL_PORT',
    arg: 'mysqlport'
  },
  dbUser: {
    doc: 'MySQL username.',
    format: '*',
    default: 'root',
    env: 'MySQL_USER',
    arg: 'mysqluser'
  },
  dbPassword: {
    doc: 'MySQL password.',
    format: '*',
    default: '',
    env: 'MySQL_PASSWORD',
    arg: 'mysqlpassword'
  },
  dbName: {
    doc: 'MySQL database name',
    format: '*',
    default: 'sleevesup',
    env: 'MySQL_DBNAME',
    arg: 'mysqldbname'
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;