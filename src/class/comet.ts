import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
import { CometParams } from "../utility/type";

export default class Comet extends MovableObject {

    constructor(params: CometParams) {
        super({
            element:Util.createElement({
                name:"img",
                attr:{
                    src:"./assets/images/comet.png",
                    class:"blink",
                },
            }),
            ...params,
        });
    }
}
