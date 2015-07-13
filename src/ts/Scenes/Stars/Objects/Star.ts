module Mattoni.Scenes.Stars {

    export class Star implements FieldObjectInterface {
        x: number;
        y: number;
        size: number;
        velocity: number;

        constructor(x: number, y: number, size: number, velocity: number) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.velocity = velocity;
        }

        draw(context: CanvasRenderingContext2D) {
            context.fillStyle = '#ffffff';
            context.fillRect(this.x, this.y, this.size, this.size);
        }

    }


}