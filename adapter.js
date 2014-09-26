(function(window) {

  var env = new nunjucks.Environment();

  window.nunjucks.getPreprocessedTemplate = function (path) {

    if (window.__html__[path]) {
      return nunjucks.compile(window.__html__[path], env);
    } else {
      throw new Error('nunjucks template does not exist');
    }
  };

  window.nunjucks.mockFilter = function (name, fn) {
    env.addFilter(name, fn || function () { return '' });
  };

})(window);