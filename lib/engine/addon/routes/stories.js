import Ember from 'ember';

const { $ } = Ember;


export default Ember.Route.extend({
  model() {
    return this.fetchStories();
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('features', model);
  },

  fetchStories() {
    return $.getJSON('/telling-stories.json').then(function(data) {
      return (data || {}).features || [];
    });
  }
});
