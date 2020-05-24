const routers = require("./routingMapping");

const registerRouters = (app) => {
  for (let entryPoint in routers) {
    routers[entryPoint].forEach((route) => {
      app.route(route.endpoint)[route.verb](route.method);
    });
  }
};

module.exports = registerRouters;
