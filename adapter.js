var should;

(function(window) {

  var env = new nunjucks.Environment(new nunjucks.WebLoader('/views'));

  window.getNunjucksTemplate = function (path) {

    if (window.__html__[path]) {
      return nunjucks.compile(window.__html__[path], env);
    } else {
      throw new Error('nunjucks template does not exist');
    }
  };

  window.mockNunjucksFilter = function (name, fn) {
    env.addFilter(name, fn || function () { return '' });
  };

})(window);