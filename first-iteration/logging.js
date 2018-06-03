const winston = require("winston")
const logzioWinston = require('winston-logzio');
const morgan = require('morgan');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console()
    ]
  });

logger.add(logzioWinston, {
    token: 'TClHaWhsIZhLAcVRbroArdedwgQSNyjy',
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