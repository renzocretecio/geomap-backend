// Initializes the `geomap` service on path `/geomap`
const {
  Geomap
} = require('./geomap.class');
const createModel = require('../../models/geomap.model');
const hooks = require('./geomap.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/geomap', new Geomap(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('geomap');

  service.publish(() => {
    return app.channel('anonymous', 'authenticated');
  });

  service.hooks(hooks);
};
