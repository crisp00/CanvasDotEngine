import { getMouse } from "../mouse";

export function OrbitDot(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

OrbitDot.prototype.render = function (ctx, offset, zoom) {
  const mouse = getMouse();
  const distX = mouse.x - this.x;
  const distY = mouse.y - this.y;
  const dist2 = distX * distX + distY * distY;
  const dist = Math.sqrt(dist2);
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(
    this.x +
      offset.x +
      (100 * Math.sin(distX / 100)) / Math.max(dist2 / 10000, 0),
    this.y +
      offset.y +
      (100 * Math.sin(distY / 100)) / Math.max(dist2 / 10000, 0),
    this.radius * zoom +
      Math.abs(3 * Math.sin(dist / 100)) / Math.max(dist2 / 10000, 0),
    this.radius * zoom +
      Math.abs(3 * Math.sin(dist / 100)) / Math.max(dist2 / 10000, 0),
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
