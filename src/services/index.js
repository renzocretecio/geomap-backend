const geomap = require('./geomap/geomap.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(geomap);
};
