const winston = require("winston")
const logzioWinston = require('winston-logzio');

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      json: true
    })
  ]
});

logger.add(logzioWinston, {
    token: '***REMOVED***',
    host: 'listener.logz.io',
    type: 'NotificationService'    
})

logger.stream = { 
    write: function(message, encoding){ 
      logger.info(message); 
    } 
  }; 
 
const middleware = require("morgan")("combined", { stream: logger.stream });

module.exports = {
    logger: logger,
    middleware: middleware
}