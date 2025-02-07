"use strict";
import Screen from "./class/screen.js";
import { Util } from "./utility/util.js";
import TextObject from "./class/textObject.js";
// $("body").css("color", "red");
// new Keyboard()
const element = Util.createElement({
    name: "img",
    attr: { src: "./assets/images/player.png" }
});
// const params: GameObjectParams = {
//     element: element,
//     position: {x: 50, y: 50},
//     size: {x: 100, y: 100}
// }
// const obj = new GameObject(params);
const params = {
    position: { x: 25, y: Screen.height - 25 },
    fontName: "Bungee Inline",
    fontSize: 40,
    text: "01233456"
};
const obj = new TextObject(params);
