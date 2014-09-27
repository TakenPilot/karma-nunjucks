(function(window) {

  window.nunjucks.Environment.prototype.getPreprocessedTemplate = function (path) {
    if (window.__html__[path]) {
      return nunjucks.compile(window.__html__[path], this);
    } else {
      throw new Error('nunjucks template does not exist');
    }
  };

  window.nunjucks.Environment.prototype.mockFilter = function (name, fn) {
    this.addFilter(name, fn || function () { return '' });
  };

})(window);