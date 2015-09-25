module Mattoni.Scenes {

    export class Scene {
        id:string;
        canvas: HTMLCanvasElement;

        width: number;
        height: number;

        constructor(id: string, parent: HTMLDivElement) {
            this.id = id;
            this.canvas = document.createElement('canvas');
            this.canvas.id = this.id;
            this.canvas.width = parent.offsetWidth;
            this.canvas.height = parent.offsetHeight;
            this.width = parent.offsetWidth;
            this.height = parent.offsetHeight;

            window.addEventListener('resize', () => {
                console.log('RESIZE');
                this.canvas.width = parent.offsetWidth;
                this.canvas.height = parent.offsetHeight;
                this.width = parent.offsetWidth;
                this.height = parent.offsetHeight;
            });

            parent.appendChild(this.canvas);
        }
    }
}