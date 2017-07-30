import { Particle } from "./Particle";

interface ManagerOpts {
    maxParticles: number;
    canvas: HTMLCanvasElement | null;
    width: number;
    height: number;
    drawInterval: number;
}

export class Manager {
    private particles: Particle[] = [];
    private context: CanvasRenderingContext2D | null;
    private animKey: number;

    constructor(private opts: ManagerOpts) {
        if (!opts.canvas) {
            throw new Error("No canvas");
        }
        this.context = opts.canvas.getContext("2d");
        this.generateParticles();
    }

    public init() {
        this.animKey = window.requestAnimationFrame(this.render);
    }

    public render = () => {
        if (!this.context) {
            throw new Error("Failed to get 2d context");
        }

        this.context.clearRect(0, 0, this.opts.width, this.opts.height);
        for (const p of this.particles) {
            p.fade();
            p.move(this.opts);
            this.drawParticle(p);
        }

        this.animKey = window.requestAnimationFrame(this.render);
    };

    public destroy() {
        window.cancelAnimationFrame(this.animKey);
    }

    private drawParticle(p: Particle) {
        const { x, y, r, cr, newo, stop } = p.getDrawParams(this.opts);

        if (!this.context) {
            throw new Error("no context");
        }

        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.closePath();

        const gradient = this.context.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            cr <= 0 ? 1 : cr,
        );
        gradient.addColorStop(0.0, "rgba(255,255,255," + newo + ")");
        gradient.addColorStop(stop, "rgba(77,101,181," + newo * 0.6 + ")");
        gradient.addColorStop(1.0, "rgba(77,101,181,0)");
        this.context.fillStyle = gradient;
        this.context.fill();
    }

    private generateParticles() {
        const defaultParticle = {
            ttl: 8000,
            xmax: 5,
            ymax: 2,
            rmax: 10,
            rt: 1,
            xdef: 960,
            ydef: 540,
            xdrift: 4,
            ydrift: 4,
            random: true,
            blink: true,
        };

        for (let i = 0; i < this.opts.maxParticles; i++) {
            this.particles.push(new Particle(defaultParticle));
            this.particles[i].reset(this.opts);
        }
    }
}
