import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | features');

test('view the list of features', function(assert) {
  visit('/telling-stories-dashboard');

  andThen(function() {
    assert.equal(currentURL(), '/telling-stories-dashboard');
    assert.equal(find('.ts-feature-list__title').length, 2);
    assert.equal(find('.ts-feature-list__title:first').text().trim(), 'Favorites');
    assert.equal(find('.ts-feature-item').length, 4);
    assert.equal(find('.ts-feature-item:first').text().trim(), 'User favorites email from inbox');
    assert.equal(find('.ts-player').attr('src'), 'data:text/plain,Pick a feature');

    let uri = find('.ts-feature-item:first').attr('href');

    assert.ok(uri.indexOf('tellingStories') > -1);
    assert.ok(uri.indexOf(encodeURIComponent('User favorites email from inbox')) > -1);
    assert.ok(uri.indexOf(encodeURIComponent('Acceptance | favorites')) > -1);
  });
});
