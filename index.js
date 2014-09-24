var path = require('path');

var createPattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var initSinon = function(files) {
  files.unshift(createPattern(path.dirname(require.resolve('nunjucks')) + '/nunjucks.js'));
};

initSinon.$inject = ['config.files'];

module.exports = {
  'framework:nunjucks': ['factory', initSinon]
};