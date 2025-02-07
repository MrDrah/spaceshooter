export var Util;
(function (Util) {
    /**
     * HTML要素生成
     * @param name     タグの名前
     * @param attr     属性
     * @returns HTMLElement オブジェクト
     */
    Util.createElement = ({ name, attr }) => {
        // 空のHTML要素を生成
        const element = document.createElement(name);
        // 属性が指定されていれば追加
        if (typeof attr !== "undefined") {
            let key;
            for (key in attr) {
                const value = attr[key];
                element.setAttribute(key, value);
            }
        }
        // 生成した要素を返す
        return element;
    };
})(Util || (Util = {}));
