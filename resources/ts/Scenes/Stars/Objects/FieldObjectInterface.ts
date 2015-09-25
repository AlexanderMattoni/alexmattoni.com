module Mattoni.Scenes.Stars {

    export interface FieldObjectInterface {
        x: number;
        y: number;
        size: number;
        velocity: number;

        draw(context: CanvasRenderingContext2D);
    }
    
}