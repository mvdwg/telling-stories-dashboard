import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('stories', { path: '/' }, function() {
    this.route('story', { path: ':testId' });
  });
});
