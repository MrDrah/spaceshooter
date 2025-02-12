import MovableObject from './movableObject.js';
import { ShotParams } from '../utility/type.js';
import { Util } from '../utility/util.js';

export default class Shot extends MovableObject {
    protected readonly _power: number;

    get power(): number {
        return this._power;
    }

    constructor (params: ShotParams) {
        super({
            element: Util.createElement({
                name: 'img',
                attr: {
                    src: './assets/images/shot.png'},
            }),
            ...params,
        });
        this._power = params.power;
    }

    draw(): void {
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = 'hue-rotate(' + h_angle + 'deg)';
        const { x, y } = this.velocity;
        const r = Math.sqrt(x ** 2 + y ** 2);
        const r_angle = Math.asin(x/r) * (180 / Math.PI);
        this.element.style.transform = 'rotate(' + r_angle + 'deg)';

        super.draw();
    }

}