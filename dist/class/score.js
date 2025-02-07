import textObject from "./textObject.js";
export default class Score extends textObject {
    _score;
    set score(score) {
        this._score = score;
    }
    constructor(params) {
        super(params);
        this._score = params.score;
    }
    draw() {
        this._text = this._score.toString().padStart(10, "0");
        super.draw();
    }
}
