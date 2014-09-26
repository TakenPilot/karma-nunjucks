var jsdom = require("jsdom");
function getWindow(cb) {
  jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
      global.window = window;
      window.nunjucks = require('nunjucks');
      cb(errors, window);
    }
  );
}

var expect = require('chai').expect;
global.nunjucks = require('nunjucks');

describe('Nunjucks for Karma Adapter', function () {
  var adapter;

  before(function (done) {
    getWindow(function (err, window) {
      if (window) {
        adapter = require('../adapter.js');
      }

      done();
    });
  });

  it('should throw exception for template that does not exist', function () {
    window.__html__ = {};
    expect(function() { nunjucks.getPreprocessedTemplate('test') }).to.throw(Error);
  });

  it('should get preprocessed template that exists', function () {
    window.__html__ = {
      'test': 'some test'
    };
    expect(nunjucks.getPreprocessedTemplate('test')).to.equal('');
  });

  it('should create mock filter', function () {
    var mockFilter = function () {};
    nunjucks.mockFilter('test', mockFilter);
    expect(nunjucks.getFilter('test')).to.equal(mockFilter);
  })
});

