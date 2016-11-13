module.exports = function (app) {


  var homePage = require('./home-page');
  app.get('/home-page', homePage.welcome);

};

