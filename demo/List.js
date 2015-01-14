define(function (require) {
    var utils = require('utils');
    var Control = require('Control');
    
    var List = function (options) {
        Control.call(this, options);
    };
    
    utils.inherits(List, Control);
    
    return List;
});