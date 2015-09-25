module Mattoni.Scenes.Stars {

    export class Controller {
        static settings: Settings;
        static updateInterval: number;
        static scene: Scene;

        static init() {
            this.settings = new Settings();
            var hero: HTMLDivElement = <HTMLDivElement> document.querySelector('.hero');
            this.scene = new Scene('stars', hero);

            var starfield = new Starfield();

            starfield.start();

            this.updateInterval = setInterval(() => {
                this.update();
            }, 1000/this.settings.fps);
        }

        static update() {

        }
    }

    Controller.init();
}