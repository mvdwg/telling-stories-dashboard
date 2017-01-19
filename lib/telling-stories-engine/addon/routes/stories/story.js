import Ember from 'ember';

function findModuleAndTest(features, id) {
  let test;
  let i = -1;

  while (!test && features[++i]) {
    test = Ember.A(features[i].tests).findBy('id', id);
  }

  if (test) {
    return { module: features[i].module, test: test.name };
  }
}

export default Ember.Route.extend({
  model(params) {
    let model = findModuleAndTest(this.modelFor('stories'), params.testId);

    return model;
  },

  setupController(controller, model) {
    controller.set('url', `/tests/index.html?tellingStories&module=${encodeURIComponent(model.module)}&filter=${encodeURIComponent(model.test)}`);
  }
});
