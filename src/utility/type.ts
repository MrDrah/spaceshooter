// Point 3d
export type Point3D = {
    x:number;
    y:number;
    z:number;
};

// Point 3d
export type Point2D = {
    x:number;
    y:number;
};

// Size
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
    

