interface ParticleOpts {
    ttl: number;
    xmax: number;
    ymax: number;
    rmax: number;
    rt: number;
    xdef: number;
    ydef: number;
    xdrift: number;
    ydrift: number;
    random: boolean;
    blink: boolean;
}

interface DrawParams {
    width: number;
    height: number;
    drawInterval: number;
}

export class Particle {
    private x: number;
    private y: number;
    private r: number;
    private dx: number;
    private dy: number;
    private hl: number;
    private rt: number;
    private stop: number;

    constructor(private opts: ParticleOpts) {}

    public reset(params: DrawParams) {
        this.x = this.opts.random
            ? params.width * Math.random()
            : this.opts.xdef;
        this.y = this.opts.random
            ? params.height * Math.random()
            : this.opts.ydef;
        this.r = (this.opts.rmax - 1) * Math.random() + 1;
        this.dx =
            Math.random() * this.opts.xmax * (Math.random() < 0.5 ? -1 : 1);
        this.dy =
            Math.random() * this.opts.ymax * (Math.random() < 0.5 ? -1 : 1);
        this.hl =
            this.opts.ttl / params.drawInterval * (this.r / this.opts.rmax);
        this.rt = Math.random() * this.hl;
        this.opts.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.opts.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.opts.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    }

    public fade() {
        this.rt += this.opts.rt;
    }

    public move(params: DrawParams) {
        this.x += this.rt / this.hl * this.dx;
        this.y += this.rt / this.hl * this.dy;
        if (this.x > params.width || this.x < 0) {
            this.dx *= -1;
        }
        if (this.y > params.height || this.y < 0) {
            this.dy *= -1;
        }
    }

    public getDrawParams(params: DrawParams) {
        if (this.opts.blink && (this.rt <= 0 || this.rt >= this.hl)) {
            this.opts.rt = this.opts.rt * -1;
        } else if (this.rt >= this.hl) {
            this.reset(params);
        }

        const newo = 1 - this.rt / this.hl;
        const cr = this.r * newo;

        return {
            x: this.x,
            y: this.y,
            r: this.r,
            dx: this.dx,
            dy: this.dy,
            hl: this.hl,
            rt: this.rt,
            stop: this.stop,
            newo,
            cr,
            ...this.opts,
        };
    }
}
