const oidc = require("oidc");

const auth = new oidc.Auth({
    oidcServer: 'http://oidc.demo-v1',
    clientId: 'mock'
  });

const oidcMiddleware = new oidc.middleware.Express(auth);

module.exports = oidcMiddleware.auth();