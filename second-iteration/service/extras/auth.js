const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

module.exports = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://oidc/.well-known/openid-configuration/jwks`
  }),

  algorithms: [ 'RS256' ]
});