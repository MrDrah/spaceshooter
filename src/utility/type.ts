import Keyboard from "../class/keyboard.js";

export type Point3D = {
    x:number;
    y:number;
    z:number;
};

export type Point2D = {
    x:number;
    y:number;
};

export type Size = Omit<Point3D, "z">;

export type GameObjectParams = {
    element:HTMLElement;
    position:Point2D;
    size?:Size;
};

export type TextObjectParams = {
    position:Point2D;
    fontName:string;
    fontSize:number;
    text?:string;
};

export type MovableObjectParams = {
    element:HTMLElement;
    position:Point2D;
    size:Size;
    velocity:Point2D;
    acceleration:Point2D;
}

export type ScoreParams = Omit<TextObjectParams, "text"> & {
  score: number;
};

export type LevelParams = Omit<TextObjectParams, "text"> & {
    level: number;
};

export type CometParams = Omit<MovableObjectParams,"element">;


export type MeteoParams = Omit<MovableObjectParams,"element"> & {
    power:number;
}

export type ShotParams = Omit<MovableObjectParams,"element"> & {
    power:number;
};

export type PlayerParams = Omit<MovableObjectParams,"element" | "velocity" | "acceleration"> & {   
    speed:number;
    keyboard:Keyboard;
};

export type SaveData = {
    level: number;
    score: number;
    shotInterval: number;
    meteoInterval: number;
  };

