import { getMouse } from "../mouse";

export function SomeAnt(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

SomeAnt.prototype.render = function (ctx, offset, zoom) {
  const mouse = getMouse();
  const distX = mouse.x - this.x;
  const distY = mouse.y - this.y;
  const dist2 = distX * distX + distY * distY;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(
    this.x + offset.x,
    this.y + offset.y,
    this.radius * zoom + dist2 / 100000,
    this.radius * zoom + dist2 / 100000,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
