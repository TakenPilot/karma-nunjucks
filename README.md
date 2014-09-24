karma-nunjucks
===========

Nunjucks for karma

**Example**
```javascript
describe("nunjucks example test", function () {
    it("some test", function() {
        var template = window.getNunjucksTemplate('index.html');
        console.log('template', template);
    });

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