import Ember from 'ember';

const { computed } = Ember;

const Component = Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target'],
  classNames: ['ts-feature-item'],

  target: 'tsplayer',

  href: computed('feature', 'test', function() {
    let feature = this.get('feature');
    let test = this.get('test');

    return `/tests/index.html?tellingStories&module=${encodeURIComponent(feature.name)}&filter=${encodeURIComponent(test)}`;
  })
});

Component.reopenClass({
  positionalParams: ['feature', 'test']
});

export default Component;
