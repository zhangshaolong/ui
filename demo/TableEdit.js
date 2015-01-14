define(function (require) {
    var utils = require('utils');
    var Plugin = require('Plugin');
    var TableEdit = function (options) {
        options = options || {};
        this.type = 'TableEdit';
        this.owner = options.owner;
    };
    var privateFun = function () {
        console.log('i am a private method!');
    };
    TableEdit.prototype.appendToRawTemplate = function (template) {
        return template.replace(/<tbody>(.+)<\/tbody>/gm, function (all, trs) {
            return '<tbody>' + trs.replace(/<\/td>/gm, '<span class="edit">   edit</span></td>') + '</tbody>';
        });
    };
    TableEdit.prototype.onAfterRender = function () {
        privateFun();
    };
    TableEdit.prototype.extendMethods = function () {
        return {
            test: function () {
                alert(this.template)
            }
        };
    };
    TableEdit.prototype.delegateEvents = function () {
        return {
            click: {
                query: 'span.edit',
                handler: function (event, ele) {
                    ele.parentNode.innerHTML = '<input class="edit-text" type="text" value="' + ele.previousSibling.nodeValue + '"/>';
                }
            },
            keydown: {
                query: '.edit-text',
                handler: function (event, ele) {
                    if (event.keyCode === 13) {
                        ele.parentNode.innerHTML = ele.value + '<span class="edit">   edit</span>';
                    }
                }
            }
        }
    };
    utils.inherits(TableEdit, Plugin);

    return TableEdit;
});