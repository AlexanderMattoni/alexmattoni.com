module Mattoni.Scenes.Stars {

    export class Starfield {
        scene:Scene;
        objects:FieldObjectInterface[];
        settings: Settings;

        updateInterval: number;

        constructor() {
            var hero: HTMLDivElement = <HTMLDivElement> document.querySelector('.hero');
            this.scene = new Scene('stars', hero);
            this.settings = new Settings();
        }

        start() {
            this.objects = [];

            for(var i = 0; i < this.settings.stars; i++) {
                this.addObject(this.randomStar());
            }


            this.updateInterval = setInterval(() => {
                this.update();
                this.draw();
            }, 1000/this.settings.fps);
        }

        addObject(object: FieldObjectInterface) {
            this.objects.push(object);
        }

        update() {
            var dt = 1 / this.settings.fps;

            for(var i=0; i<this.objects.length; i++) {
                var object = this.objects[i];
                object.y += dt * object.velocity;
                //	Redraw object at top
                if(object.y > this.scene.height) {
                    this.objects[i] = this.randomStar();
                    this.objects[i].y = 0;
                }
            }
        }

        draw() {
            var ctx = <CanvasRenderingContext2D> this.scene.canvas.getContext("2d");
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, this.scene.width, this.scene.height);

            for(var i=0; i<this.objects.length;i++) {
                this.objects[i].draw(ctx);
            }
        }

        randomStar(): Star {
           return new Star(
                Math.random()*this.scene.width,
                Math.random()*this.scene.height,
                Math.random()*3+1,
                (Math.random()*(this.settings.maxVelocity - this.settings.minVelocity))+this.settings.minVelocity
            )
        }
    }

}