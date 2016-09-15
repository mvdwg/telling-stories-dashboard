import Ember from 'ember';

const { $ } = Ember;

export default Ember.Route.extend({
  model() {
    return $.getJSON('/telling-stories.json');
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('features', model);
  }
});
