import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
export default class Comet extends MovableObject {
    constructor(params) {
        super({
            element: Util.createElement({
                name: "img",
                attr: {
                    src: "./assets/images/comet.png",
                    class: "blink",
                },
            }),
            ...params,
        });
    }
}
