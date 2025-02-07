"use strict";
import Screen from "./class/screen.js";
import Level from "./class/level.js";
// $("body").css("color", "red");
// new Keyboard()
// const element = Util.createElement({
//     name:"img",
//     attr:{src:"./assets/images/player.png"}
// });  
// const params: GameObjectParams = {
//     element: element,
//     position: {x: 50, y: 50},
//     size: {x: 100, y: 100}
// }
// const obj = new GameObject(params);
// const params: TextObjectParams = {
//     position: {x: 25, y: Screen.height - 25},
//     fontName: "Bungee Inline",
//     fontSize: 40,
//     text: "01233456"
// };
// const obj = new TextObject(params);
// const shot1 = new MovableObject({
//     element: Util.createElement({
//         name: "img",
//         attr: { src: "./assets/images/shot.png" },
//     }),
//     position: { x: 50, y: -32 },
//     size: { x: 20, y: 65 },
//     velocity: { x: 0, y: 5 },
//     acceleration: { x: 0, y: 2 },
// });
// const shot2 = new MovableObject({
//     element: Util.createElement({
//         name: "img",
//         attr: { src: "./assets/images/shot.png" },
//     }),
//     position: { x: 90, y: -32 },
//     size: { x: 20, y: 65 },
//     velocity: { x: 0, y: 5 },
//     acceleration: { x: 0, y: 2 },
// });
// const obj = new Score({
//     position: { x: 25, y: screen.height - 25 },
//     fontName: "Bungee Inline",
//     fontSize: 40,
//     // text: "00000000",
//     score: 12345667,
// });
const obj = new Level({
    position: { x: 25, y: Screen.height - 25 },
    fontName: "Bungee Inline",
    fontSize: 24,
    level: 1,
});
