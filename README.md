karma-nunjucks
===========

Nunjucks for Karma

Uses html2js preprocessor ("karma-html2js-preprocessor") or an ordinary template string to compile nunjucks templates
using any version of nunjucks.

[![Code Climate](https://codeclimate.com/github/TakenPilot/karma-nunjucks/badges/gpa.svg)](https://codeclimate.com/github/TakenPilot/karma-nunjucks)

**Basic Example
```javascript
describe("nunjucks example test", function () {
    var template;

    before(function () {
        template = nunjucks.compile('<div class=".thing"> {{ thing }} </div>');
    })

    it('Thing has class', function () {
        var $el = $(template.render({thing: "something"}));
        expect($el.is('.thing')).to.be.true;
    });;
});
```

**Easier Example**
```javascript
describe("nunjucks example test", function () {
    var template;

    before(function () {
        template = nunjucks.getPreprocessedTemplate('index.html');
    })

    it('Thing has class', function () {
        var $el = $(template.render({}));
        var thing = new Thing($el);
        expect($el.is('.thing')).to.be.true;
    });

    it('Thing has widget class', function () {
        var $el = $(template.render({widget: {items: []}}));
        var thing = new Thing($el);
        expect($el.find('.widget').length).to.equal(1);
    });

    it('Thing has widget class', function () {
        var $el = $(template.render({widget: {items: [{label: "Item 1", tag: "itemTag"}]}}));
        var thing = new Thing($el);
        expect($el.find('.widget').find('li[data-filter]').length).to.equal(1);
    });
});
```
