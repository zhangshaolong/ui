define(function () {
    var exports = {};
    /**
     * 为类型构造器建立继承关系
     *
     * @param {Function} subClass 子类构造器
     * @param {Function} superClass 父类构造器
     * @return {Function} 返回`subClass`构造器
     */
    exports.inherits = function (subClass, superClass) {
        var Empty = function () {};
        Empty.prototype = superClass.prototype;
        var selfPrototype = subClass.prototype;
        var proto = subClass.prototype = new Empty();

        for (var key in selfPrototype) {
            proto[key] = selfPrototype[key];
        }
        subClass.prototype.constructor = subClass;
        subClass.superClass = superClass.prototype;

        return subClass;
    };
    
    return exports;
})