import textObject from "./textObject.js";
import { ScoreParams } from "../utility/type";

export default class Score extends textObject {
    protected _score: number;

    set score(score: number) {
        this._score = score;
    }

    constructor(params: ScoreParams) {
        super(params);
        this._score = params.score;
    }

    draw(): void {
        this._text = this._score.toString().padStart(10, "0");
        super.draw();
    }
}