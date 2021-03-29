import { getMouse } from "../mouse";

export function DiscoDot2(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

DiscoDot2.prototype.render = function (ctx, offset, zoom) {
  const mouse = getMouse();
  const distX = mouse.x - this.x;
  const distY = mouse.y - this.y;
  const dist2 = distX * distX + distY * distY;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(
    this.x + offset.x,
    this.y + offset.y,
    this.radius * zoom + 10 / Math.max(dist2 / 100000, 1),
    this.radius * zoom + 10 / Math.max(dist2 / 100000, 1),
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
