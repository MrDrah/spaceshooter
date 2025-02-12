import GameObject from "../class/gameObject.js";
import { Point2D } from "./type.js";
import Screen from "../class/screen.js";

export namespace Util {
  export const createElement = ({ name, attr }: createElementOptions): HTMLElement => {
    
    const element = document.createElement(name);
    
    if (typeof attr !== "undefined") {
      let key: keyof typeof attr;
      for (key in attr) {
        const value = attr[key];
        element.setAttribute(key, value);
      }
    }
    
    return element;
  };

  export const clampScreen = <T extends GameObject>
  (obj: T,strict:boolean = false):Point2D => {
    let [x,y] = [obj.position.x,obj.position.y];
    let offsetX = strict ? obj.size.x / 2 : -(obj.size.x / 2);
    let offsetY = strict ? obj.size.y / 2 : -(obj.size.y / 2);
  
    x = Math.max(x,offsetX);
    x = Math.min(x, Screen.width - offsetX);

    y = Math.max(y,offsetY);
    y = Math.min(y, Screen.height - offsetY);

    return {
      x:x,
      y:y
    };
  };

  export const getShotPower = (level:number):number => {
    return Math.min(Math.floor(Math.pow(level,1.3)),1000);
  };

  export const random = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };
  
  export const getMeteoPower = (level:number):number => {
    return Math.min(Math.floor(Math.pow(level,1.5)),5000);
  };

  export const getNextScore = (level: number): number => {
    return Math.floor(Math.pow(level, 2) * 100);
  };

  export const isOutsideScreen = <T extends GameObject>(obj: T): boolean => {
    let result = false;
    const clamped_pos = Util.clampScreen(obj,false);
    if (clamped_pos.x !== obj.position.x || clamped_pos.y !== obj.position.y) {
      result = true;
    }
    return result;
  };

  export const removeObject = <T extends GameObject>(obj: T,
    array?: Array<T>): void => {
      obj.dispose();
      if (typeof array !=="undefined") {
        array.splice(array.indexOf(obj),1);
      }
    };
    
  export const isColliding = <T1 extends GameObject, T2 extends GameObject>(obj1: T1, obj2: T2, radius: number): boolean => {
    const [x1, y1] = [obj1.position.x, obj1.position.y];
    const [x2, y2] = [obj2.position.x, obj2.position.y];

    const [dx,dy] = [x1 - x2, y1 - y2];
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= radius;
  };
}

type createElementOptions = {
    name:string;
    attr?:Record<string,string>;
};


