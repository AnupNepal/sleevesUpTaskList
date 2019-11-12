/**
 * Logger
 */

const log4js = require ('log4js');

class Logger {

  constructor (logfile, logtype, loglevel) {

    log4js.configure ({
      appenders: {
        file: {type: 'file', filename: logfile, maxLogSize: 10 * 1024 * 1024},
        stdout: {type: 'stdout'}
      },
      categories: {
        default: {
          appenders: [logtype],
          level: loglevel
        }
      }
    });

  }

  logger () {
    return log4js.getLogger ();
  }
}

module.exports = {Logger};



