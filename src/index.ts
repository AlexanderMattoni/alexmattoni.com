import { setDimensions, getDimensions } from "./Boot";
import { Manager } from "./Particles";

setDimensions();
window.addEventListener("resize", init);

let manager: Manager;

function init() {
    if (manager) {
        manager.destroy();
    }
    setDimensions();

    const managerOpts = {
        ...getDimensions(),
        drawInterval: 60,
        maxParticles: 500,
    };

    manager = new Manager(managerOpts);
    manager.init();
}

init();
