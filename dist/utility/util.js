import Screen from "../class/screen.js";
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
    Util.clampScreen = (obj, strict = false) => {
        let [x, y] = [obj.position.x, obj.position.y];
        let offsetX = strict ? obj.size.x / 2 : -(obj.size.x / 2);
        let offsetY = strict ? obj.size.y / 2 : -(obj.size.y / 2);
        x = Math.max(x, offsetX);
        x = Math.min(x, Screen.width - offsetX);
        y = Math.max(y, offsetY);
        y = Math.min(y, Screen.height - offsetY);
        return {
            x: x,
            y: y
        };
    };
    Util.getShotPower = (level) => {
        return Math.min(Math.floor(Math.pow(level, 1.3)), 1000);
    };
    Util.random = (min, max) => {
        // minとmaxの間のランダムな数値
        return Math.random() * (max - min) + min;
    };
    Util.getMeteoPower = (level) => {
        return Math.min(Math.floor(Math.pow(level, 1.5)), 5000);
    };
    Util.getNextScore = (level) => {
        // レベルが上がるごとに必要スコアが増えていく
        return Math.floor(Math.pow(level, 2) * 100);
    };
    Util.isOutsideScreen = (obj) => {
        let result = false;
        const clamped_pos = Util.clampScreen(obj, false);
        if (clamped_pos.x !== obj.position.x || clamped_pos.y !== obj.position.y) {
            result = true;
        }
        return result;
    };
    Util.removeObject = (obj, array) => {
        obj.dispose();
        if (typeof array !== "undefined") {
            array.splice(array.indexOf(obj), 1);
        }
    };
    Util.isColliding = (obj1, obj2, radius) => {
        const [x1, y1] = [obj1.position.x, obj1.position.y];
        const [x2, y2] = [obj2.position.x, obj2.position.y];
        const [dx, dy] = [x1 - x2, y1 - y2];
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= radius;
    };
})(Util || (Util = {}));
