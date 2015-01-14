define(function (require) {
    var dom = require('./lib/dom');
    
    var Control = function (options) {
        options = options || {};
        this.initOptions(options);
        this.initStructure(options);
        this.initPlugins(options.plugins);
        this.compileTemplate();
        this.registerPluginMethods();
        this.delegatePluginEvents();
        this.render();
        this.runPluginCallbacks();
    };
    Control.prototype.initOptions = function (options) {
        console.log('initOptions');
        this.plugins = [];
        this.pluginMethods = {};
        this.delegateEvents = [];
        this.afterRenders = [];
        this.eventsHandlers = options.eventsHandlers || {};
        this.template = options.template || '';
    };
    Control.prototype.compileTemplate = function () {
        console.log('compileTemplate');
    };
    Control.prototype.initViewContext = function () {
        console.log('initViewContext');
    };
    Control.prototype.initStructure = function () {
        console.log('initStructure');
        this.main = document.getElementById('div');
    };
    Control.prototype.initPlugins = function (plugins) {
        console.log('initPlugins');
        if (!plugins) {
            return;
        }
        for (var i = 0, len = plugins.length; i < len; i++) {
            var Plugin = plugins[i];
            var plugin = new Plugin({
                owner: this
            });
            this.plugins.push(plugin);
            this.template = plugin.appendToRawTemplate(this.template);
            this.afterRenders.push(plugin.onAfterRender.bind(plugin));
            var pluginMethods = plugin.extendMethods();
            for (var funName in pluginMethods) {
                this.pluginMethods[funName] = pluginMethods[funName];
            }
            this.delegateEvents.push(plugin.delegateEvents());
        }
    };
    Control.prototype.delegatePluginEvents = function () {
        console.log('delegatePluginEvents');
        for (var i = 0, len = this.delegateEvents.length; i < len; i++) {
            var delegateEvent = this.delegateEvents[i];
            for (var eventType in delegateEvent) {
                var handlerQueue = this.eventsHandlers[eventType];
                if (!handlerQueue) {
                    handlerQueue = this.eventsHandlers[eventType] = [];
                    this.main.addEventListener(eventType, this.findHandler(handlerQueue), false); 
                }
                handlerQueue.push(delegateEvent[eventType]);
            }
        }
    };
    Control.prototype.registerPluginMethods = function () {
        console.log('registerPluginMethods');
        for (var funName in this.pluginMethods) {
            this[funName] = this.pluginMethods[funName];
        }
    };
    Control.prototype.render = function () {
        console.log('render');
        this.main.innerHTML = this.template;
    };
    Control.prototype.runPluginCallbacks = function () {
        console.log('runPluginCallbacks');
        for (var i = 0, len = this.afterRenders.length; i < len; i++) {
            var callback = this.afterRenders[i];
            callback();
        }
    };
    Control.prototype.dispose = function () {
        for (var i = 0, len = this.plugins.length; i < len; i++) {
            this.plugins[i].dispose();
        }
        this.main.parentNode.removeChild(this.main);
    };
 
    Control.prototype.findHandler = function (handlerQueue) {
        return function (event) {
            event = event || window.event;
            var main = this.main;
            for (var i = 0, len = handlerQueue.length; i < len; i++) {
                var handler = handlerQueue[i];
                var el = dom.getQueryNode(event.target, handler.query, main);
                if (el) {
                    handler.handler.call(this, event, el);
                }
            }
        }.bind(this);
    };

    return Control;
});