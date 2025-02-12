import MovableObject from './movableObject.js';
import { Util } from '../utility/util.js';
export default class Shot extends MovableObject {
    _power;
    get power() {
        return this._power;
    }
    constructor(params) {
        super({
            element: Util.createElement({
                name: 'img',
                attr: {
                    src: './assets/images/shot.png'
                },
            }),
            ...params,
        });
        this._power = params.power;
    }
    draw() {
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = 'hue-rotate(' + h_angle + 'deg)';
        const { x, y } = this.velocity;
        const r = Math.sqrt(x ** 2 + y ** 2);
        const r_angle = Math.asin(x / r) * (180 / Math.PI);
        this.element.style.transform = 'rotate(' + r_angle + 'deg)';
        super.draw();
    }
}
