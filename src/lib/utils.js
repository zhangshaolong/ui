define(function () {
    var exports = {};
    /**
     * Ϊ���͹����������̳й�ϵ
     *
     * @param {Function} subClass ���๹����
     * @param {Function} superClass ���๹����
     * @return {Function} ����`subClass`������
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