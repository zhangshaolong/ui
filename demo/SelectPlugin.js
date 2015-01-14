define(function (require) {
    var utils = require('utils');
    var Plugin = require('Plugin');
    var SelectPlugin = function (options) {
        options = options || {};
        this.type = 'SelectTable';
        this.owner = options.owner;
    };
    SelectPlugin.prototype.appendToRawTemplate = function (template) {
        return template + '<div class="aaa">aaaa<span>adssfdsf</span></div>';
    };
    SelectPlugin.prototype.onAfterRender = function (template) {
        console.log('aabbcc')
    };
    SelectPlugin.prototype.extendMethods = function (template) {
        return {
            aaa: function () {
                return 12;
            }
        };
    };
    SelectPlugin.prototype.delegateEvents = function () {
        return {
            click: {
                query: '.aaa',
                handler: function () {
                    console.log(this)
                }
            },
            mouseover: {
                query: 'div',
                handler: function (event, ele) {
                    ele.style.background = 'red';
                }
            },
            mouseout: {
                query: 'div',
                handler: function (event, ele) {
                    ele.style.background = '';
                }
            }
        }
    };

    utils.inherits(SelectPlugin, Plugin);
    
    return SelectPlugin;
});