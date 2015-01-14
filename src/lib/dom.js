define(function () {
    var exports = {
        matchSelector: (function () {
            var tempE = document.createElement('span');
            var matches = // ���ݸ�������������
                // w3c��׼
                tempE.matches
                // Chrome, Opera 15+, Safari
                || tempE.webkitMatchesSelector
                // Mozilla
                || tempE.mozMatchesSelector
                // IE9+
                || tempE.msMatchesSelector
                // Opera
                || tempE.oMatchesSelector;
            return function (el, query) {
                return matches.call(el, query);
            };
        })(),
        getQueryNode: function (el, query, endEl) {
            endEl = endEl || document.body;
            if (!query) {
                return endEl;
            }
            var cur = el;
            while (cur && cur !== endEl) {
                if (cur.nodeType === 1) {
                    if (exports.matchSelector(cur, query)) {
                        return cur;
                    }
                }
                cur = cur.parentNode;
            }
            return null;
        }
    };
    
    return exports;

});