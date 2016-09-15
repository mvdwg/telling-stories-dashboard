import Ember from 'ember';

const { computed } = Ember;

const Component = Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target'],
  classNames: ['ts-feature-item'],

  target: 'tsplayer',

  href: computed('feature', 'test', function() {
    let module = this.get('feature.module');
    let test = this.get('test.name');

    return `/tests/index.html?tellingStories&module=${encodeURIComponent(module)}&filter=${encodeURIComponent(test)}`;
  })
});

Component.reopenClass({
  positionalParams: ['feature', 'test']
});

export default Component;
