var Plugin = require('broccoli-plugin');
var fs = require('fs');
var glob = require('glob');
var path = require('path');
var logger = require('heimdalljs-logger')('telling-stories-parser');

module.exports = CreateListOfTests;

CreateListOfTests.prototype = Object.create(Plugin.prototype);
CreateListOfTests.prototype.constructor = CreateListOfTests;
function CreateListOfTests(inputNode, options) {
  logger.info(inputNode);
  options = options || {};
  Plugin.call(this, [inputNode], {
    annotation: options.annotation
  });
  this.options = options;
}

CreateListOfTests.prototype.build = function() {
  var extractMetadata = require('./extract-metadata');
  var inputPath = this.inputPaths[0];

  var records = glob.sync('**/*-test.js', { cwd: inputPath })
    .map(function(fileName) {
      return path.join(inputPath, fileName);
    })
    .map(function(file) {
      logger.info(file);
      return extractMetadata(fs.readFileSync(file));
    });

  fs.writeFileSync(path.join(this.outputPath, 'telling-stories.json'), JSON.stringify({ features: records }));
};
