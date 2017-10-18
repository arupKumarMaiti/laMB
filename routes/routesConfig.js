function routesConfig(app) {
  this.app = app;
  this.routesTable = [];
  this.init();
}

routesConfig.prototype.init = function () {
  var routes = this;
  routes.addRoutes();
  routes.processRoutes();
};

routesConfig.prototype.addRoutes = function () {
  var routes = this;
  routes.routesTable.push({
    requestType: 'get',
    requestUrl: '/',
    callbackFunction: function (req, res) {
      res.render('index', {title: 'Express'});
    }
  });
};

routesConfig.prototype.processRoutes = function () {
  var routes = this;
  routes.routesTable.forEach(function (route) {
    if (route.requestType == 'get') {
      routes.app.get(route.requestUrl, route.callbackFunction);
    } else if (route.requestType == 'post') {
      // implement later
    } else if (route.requestType == 'delete') {
      // implement later
    }
  });
};

module.exports = routesConfig;
