import { createCanvas } from "./canvas";
import { startMainLoop } from "./loop";

function start(rootId) {
  let root = document.getElementById(rootId);
  let canvas = createCanvas(root);
  startMainLoop(canvas);
}

window.addEventListener("load", () => {
  start("element");
});
