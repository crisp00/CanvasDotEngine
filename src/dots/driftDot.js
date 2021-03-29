import { getMouse } from "../mouse";

export function DriftDot(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

DriftDot.prototype.render = function (ctx, offset, zoom) {
  const mouse = getMouse();
  const distX = mouse.x - this.x;
  const distY = mouse.y - this.y;
  const dist2 = distX * distX + distY * distY;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(
    this.x +
      offset.x +
      30 / Math.max(Math.abs(distX) / 100, 1) / Math.max(dist2 / 10000, 1),
    this.y +
      offset.y +
      30 / Math.max(Math.abs(distY) / 100, 1) / Math.max(dist2 / 10000, 1),
    this.radius * zoom,
    this.radius * zoom,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
