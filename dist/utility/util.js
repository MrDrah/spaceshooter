export var Util;
(function (Util) {
    Util.createElement = ({ name, attr }) => {
        const element = document.createElement(name);
        if (typeof attr !== "undefined") {
            let key;
            for (key in attr) {
                const value = attr[key];
                element.setAttribute(key, value);
            }
        }
        return element;
    };
})(Util || (Util = {}));
