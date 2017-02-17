/*jshint node:true*/

var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'telling-stories-engine',
  lazyLoading: false,

  included: function(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
  },

  isDevelopingAddon() {
    return true;
  },

  // Without this hook, content meta tags from
  // ember-asset-loader addon are not generated
  // TODO: try to delete this after upgrading ember-cli
  contentFor: function() {
    this._super.included.apply(this, arguments);
  }
});
