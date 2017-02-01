/* jshint node: true */
'use strict';

module.exports = {
  name: 'telling-stories-dashboard',

  isDevelopingAddon() {
    return true;
  },

  included: function(app, addon) {
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    this._super.included.apply(this, arguments);
  }
};
