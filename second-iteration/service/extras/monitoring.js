const expressStatsd = require('express-statsd');
const lynx = require("lynx");

module.exports.middleware = expressStatsd({
    client: new lynx('graphite', 8125)
});