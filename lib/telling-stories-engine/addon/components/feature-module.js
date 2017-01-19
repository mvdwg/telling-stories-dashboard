import Ember from 'ember';

const { computed } = Ember;

const Component = Ember.Component.extend({
  tagName: 'h4',
  classNames: ['ts-feature-list__title'],

  text: computed('feature', function() {
    let feature = this.get('feature');

    return Ember.String.capitalize(feature.module.replace(/^Acceptance \|\s*/, ''));
  })
});

Component.reopenClass({
  positionalParams: ['feature']
});

export default Component;
