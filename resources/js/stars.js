var Mattoni;
(function (Mattoni) {
    var Scenes;
    (function (Scenes) {
        var Scene = (function () {
            function Scene(id, parent) {
                var _this = this;
                this.id = id;
                this.canvas = document.createElement('canvas');
                this.canvas.id = this.id;
                this.canvas.width = parent.offsetWidth;
                this.canvas.height = parent.offsetHeight;
                this.width = parent.offsetWidth;
                this.height = parent.offsetHeight;
                window.addEventListener('resize', function () {
                    console.log('RESIZE');
                    _this.canvas.width = parent.offsetWidth;
                    _this.canvas.height = parent.offsetHeight;
                    _this.width = parent.offsetWidth;
                    _this.height = parent.offsetHeight;
                });
                parent.appendChild(this.canvas);
            }
            return Scene;
        })();
        Scenes.Scene = Scene;
    })(Scenes = Mattoni.Scenes || (Mattoni.Scenes = {}));
})(Mattoni || (Mattoni = {}));
var Mattoni;
(function (Mattoni) {
    var Scenes;
    (function (Scenes) {
        var Stars;
        (function (Stars) {
            var Settings = (function () {
                function Settings() {
                    this.fps = 30;
                    this.width = 0;
                    this.height = 0;
                    this.minVelocity = 15;
                    this.maxVelocity = 30;
                    this.stars = 600;
                }
                return Settings;
            })();
            Stars.Settings = Settings;
        })(Stars = Scenes.Stars || (Scenes.Stars = {}));
    })(Scenes = Mattoni.Scenes || (Mattoni.Scenes = {}));
})(Mattoni || (Mattoni = {}));
var Mattoni;
(function (Mattoni) {
    var Scenes;
    (function (Scenes) {
        var Stars;
        (function (Stars) {
            var Star = (function () {
                function Star(x, y, size, velocity) {
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    this.velocity = velocity;
                }
                Star.prototype.draw = function (context) {
                    context.fillStyle = '#ffffff';
                    context.fillRect(this.x, this.y, this.size, this.size);
                };
                return Star;
            })();
            Stars.Star = Star;
        })(Stars = Scenes.Stars || (Scenes.Stars = {}));
    })(Scenes = Mattoni.Scenes || (Mattoni.Scenes = {}));
})(Mattoni || (Mattoni = {}));
var Mattoni;
(function (Mattoni) {
    var Scenes;
    (function (Scenes) {
        var Stars;
        (function (Stars) {
            var Starfield = (function () {
                function Starfield() {
                    var hero = document.querySelector('.hero');
                    this.scene = new Scenes.Scene('stars', hero);
                    this.settings = new Stars.Settings();
                }
                Starfield.prototype.start = function () {
                    var _this = this;
                    this.objects = [];
                    for (var i = 0; i < this.settings.stars; i++) {
                        this.addObject(this.randomStar());
                    }
                    this.updateInterval = setInterval(function () {
                        _this.update();
                        _this.draw();
                    }, 1000 / this.settings.fps);
                };
                Starfield.prototype.addObject = function (object) {
                    this.objects.push(object);
                };
                Starfield.prototype.update = function () {
                    var dt = 1 / this.settings.fps;
                    for (var i = 0; i < this.objects.length; i++) {
                        var object = this.objects[i];
                        object.y += dt * object.velocity;
                        if (object.y > this.scene.height) {
                            this.objects[i] = this.randomStar();
                            this.objects[i].y = 0;
                        }
                    }
                };
                Starfield.prototype.draw = function () {
                    var ctx = this.scene.canvas.getContext("2d");
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(0, 0, this.scene.width, this.scene.height);
                    for (var i = 0; i < this.objects.length; i++) {
                        this.objects[i].draw(ctx);
                    }
                };
                Starfield.prototype.randomStar = function () {
                    return new Stars.Star(Math.random() * this.scene.width, Math.random() * this.scene.height, Math.random() * 3 + 1, (Math.random() * (this.settings.maxVelocity - this.settings.minVelocity)) + this.settings.minVelocity);
                };
                return Starfield;
            })();
            Stars.Starfield = Starfield;
        })(Stars = Scenes.Stars || (Scenes.Stars = {}));
    })(Scenes = Mattoni.Scenes || (Mattoni.Scenes = {}));
})(Mattoni || (Mattoni = {}));
var Mattoni;
(function (Mattoni) {
    var Scenes;
    (function (Scenes) {
        var Stars;
        (function (Stars) {
            function init() {
                var starfield = new Stars.Starfield();
                starfield.start();
            }
            Stars.init = init;
            init();
        })(Stars = Scenes.Stars || (Scenes.Stars = {}));
    })(Scenes = Mattoni.Scenes || (Mattoni.Scenes = {}));
})(Mattoni || (Mattoni = {}));
/// <reference path="../Shared/Scene.ts" />
/// <reference path="Settings.ts" />
/// <reference path="Objects/Star.ts" />
/// <reference path="Starfield.ts" />
/// <reference path="Controller.ts" />
/// <reference path="Objects/FieldObjectInterface.ts" />
