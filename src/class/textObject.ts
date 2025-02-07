import GameObject from "./gameObject";
import IText from "../interface/text";
import { TextObjectParams } from "../utility/type";
import { Util } from "../utility/util";

export default class TextObject extends GameObject implements IText {
    public readonly _fontSize: number;
    public readonly _fontName: string;
    public _text: string;

    get fontName():string {
        return this._fontName;
    }
    get fontSize():number {
        return this._fontSize;
    }
    get text():string {
        return this._text;
    }
    set text(text:string) {
        this._text=text;
    }

    constructor(params: TextObjectParams) {
        super({
            element: Util.createElement({
                name: "div",
            }),
            ...params,
        });
        this._fontSize = params.fontSize;
        this._fontName = params.fontName;
        this._text = params.text;
    }
}
