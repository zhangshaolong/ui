define(function (require) {
    var utils = require('utils');
    var Control = require('Control');
    
    var Table = function (options) {
        options.template = '<table style="width: 100%;"><colgroup><col style="width: 300px;"></col><col style="width: 300px;"></col><col></col></colgroup><thead><tr><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr><tr><td>test</td><td>test1</td><td>test3</td></tr></tbody></table>';
        Control.call(this, options);
    };
    
    utils.inherits(Table, Control);
    
    return Table;
});