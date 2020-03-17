const assert = require('assert');
const app = require('../../src/app');

describe('\'geomap\' service', () => {
  it('registered the service', () => {
    const service = app.service('geomap');

    assert.ok(service, 'Registered the service');
  });
});
