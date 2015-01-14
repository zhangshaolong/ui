define(function (require) {
    var utils = require('utils');
    var Plugin = require('Plugin');
    var TableSort = function (options) {
        options = options || {};
        this.type = 'TableSort';
        this.owner = options.owner;
    };
    var privateFun = function () {
        console.log('i am a private method!');
    };
    TableSort.prototype.appendToRawTemplate = function (template) {
        return template.replace(/<\/th>/gm, function () {
            return '<span class="sort">sort</span></th>';
        });
    };
    TableSort.prototype.onAfterRender = function () {
        privateFun();
    };
    TableSort.prototype.extendMethods = function () {
        return {
            test: function () {
                alert(this.template)
            }
        };
    };
    TableSort.prototype.delegateEvents = function () {
        return {
            click: {
                query: 'span.sort',
                handler: function (event, ele) {
                    alert(ele.parentNode.innerText);
                }
            }
        }
    };
    utils.inherits(TableSort, Plugin);

    return TableSort;
});