/* jshint node: true */
'use strict';

var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'telling-stories-dashboard',

  included: function(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    app.import('vendor/telling-stories-dashboard.css');
  },

  isDevelopingAddon() {
    return true;
  }
});
