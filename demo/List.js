define(function (require) {
    var utils = require('utils');
    var Control = require('Control');
    
    var List = function (options) {
        options.template = '<table><thead><tr><th>1</th><th>2</th><th>3</th></tr></thead></table>';
        Control.call(this, options);
    };
    
    
    utils.inherits(List, Control);
    
    return List;
});