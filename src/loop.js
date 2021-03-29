import { DiscoDot } from "./dots/discoDot";
import { DiscoDot2 } from "./dots/discoDot2";
import { DriftDot } from "./dots/driftDot";
import { OrbitDot } from "./dots/orbitDot";
import { RepelDot } from "./dots/repelDot";
import { SomeDot } from "./dots/someDot";
import { getMouse, initMouse } from "./mouse";
import { World } from "./world";

let canvas;
let ctx;
let world;
let mouse = { x: 0, y: 0 };

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let startTime, endTime;
function loop() {
  mouse = getMouse();
  clear();
  world.render(ctx);
  ctx.fillStyle = "white";
  ctx.fillRect(5, 5, 150, 30);
  ctx.font = "20px Verdana";
  ctx.fillStyle = "blue";
  endTime = window.performance.now();
  let fps = 1000 / (endTime - startTime);
  startTime = window.performance.now();
  ctx.fillText(`FPS: ${fps.toFixed(1)}`, 10, 30);
  window.requestAnimationFrame(loop);
}

export function startMainLoop(canvas_) {
  canvas = canvas_;
  ctx = canvas.getContext("2d");
  world = new World();
  initMouse(canvas);
  for (let y = -20; y < canvas.height + 20; y += 20) {
    for (let x = -20; x < canvas.width + 20; x += 20) {
      world.addObject(new SomeDot(x, y, 2));
    }
  }
  window.requestAnimationFrame(loop);
}
