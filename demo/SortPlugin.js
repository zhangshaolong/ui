define(function (require) {
    var utils = require('utils');
    var Plugin = require('Plugin');
    var SortPlugin = function (options) {
        options = options || {};
        this.type = 'SortTable';
        this.owner = options.owner;
    };
    var privateFun = function () {
        console.log('i am a private method!');
    };
    SortPlugin.prototype.appendToRawTemplate = function (template) {
        return template + '<div>test<span>adfdfdfdsfd</span></div>';
    };
    SortPlugin.prototype.onAfterRender = function () {
        privateFun();
    };
    SortPlugin.prototype.extendMethods = function () {
        return {
            test: function () {
                alert(this.template)
            }
        };
    };
    SortPlugin.prototype.delegateEvents = function () {
        return {
            mouseover: {
                query: 'div',
                handler: function (event, ele) {
                    ele.style.color = 'blue';
                }
            },
            mouseout: {
                query: 'div',
                handler: function (event, ele) {
                    ele.style.color = '';
                }
            }
        }
    };
    utils.inherits(SortPlugin, Plugin);

    return SortPlugin;
});