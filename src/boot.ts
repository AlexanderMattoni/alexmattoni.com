const container = document.querySelector("div");
const canvas = document.querySelector("canvas");
let width = window.innerWidth;
let height = window.innerHeight;

export function setDimensions() {
    if (!canvas || !container) {
        throw new Error("Elements not found");
    }

    width = window.innerWidth;
    height = window.innerHeight;
    container.style.width = width + "px";
    container.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
}

export function getDimensions() {
    return {
        width,
        height,
        canvas,
    };
}
