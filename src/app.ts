"use strict";

import Screen  from "./class/screen.js";
// import Keyboard from "./class/keyboard.js";
import GameObject  from "./class/gameObject.js";
import { GameObjectParams } from "./utility/type.js";
import { Util } from "./utility/util.js";
import TextObject from "./class/textObject.js";
import { TextObjectParams } from "./utility/type.js";


// $("body").css("color", "red");
// new Keyboard()

const element = Util.createElement({
    name:"img",
    attr:{src:"./assets/images/player.png"}
});  

const params: TextObjectParams = {
    position: {x: 25, y: Screen.height - 25},
    fontName: "Bungee Inline",
    fontSize: 40,
    text: "Hello, World!"
};


const obj = new TextObject(params);

obj.dispose();









