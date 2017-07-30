var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    MAX_PARTICLES = 100,
    DRAW_INTERVAL = 60,
    container = document.querySelector("#container"),
    canvas = document.querySelector("#pixie"),
    context = canvas.getContext("2d"),
    gradient = null,
    pixies = new Array();

function setDimensions(e) {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    container.style.width = WIDTH + "px";
    container.style.height = HEIGHT + "px";
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}
setDimensions();
window.addEventListener("resize", setDimensions);
