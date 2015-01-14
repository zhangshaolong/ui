define(function () {

    var Plugin = function (opitons) {
        options = options || {};
        this.owner = options.owner;
    };

    Plugin.prototype.delegateEvents = function () {
        return {};
    };

    Plugin.prototype.appendToRawTemplate = function (template) {
        return template;
    };

    Plugin.prototype.onAfterRender = function () {
    };

    Plugin.prototype.renderTemplate = function (data) {
    };

    Plugin.prototype.extendMethods = function () {
        return {};
    };

    Plugin.prototype.dispose = function () {
    };

    return Plugin;
});